import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// IMPORTANTE: Adicione sua Google Places API Key aqui
const GOOGLE_API_KEY = "AIzaSyDKZIJ0tUvWwJTD0ezv4mar13jhA35YktA";
const PLACE_ID = "678763075678900726";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
  relative_time_description: string;
}

interface PlaceDetails {
  rating: number;
  user_ratings_total: number;
  reviews: Review[];
}

const GoogleReviews = () => {
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!GOOGLE_API_KEY || GOOGLE_API_KEY === "SUA_API_KEY_AQUI") {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${GOOGLE_API_KEY}&language=pt-BR`,
          { mode: 'cors' }
        );
        
        const data = await response.json();
        
        if (data.status === "OK" && data.result) {
          setPlaceDetails({
            rating: data.result.rating,
            user_ratings_total: data.result.user_ratings_total,
            reviews: data.result.reviews || [],
          });
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Erro ao buscar avaliações:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">Carregando avaliações...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !placeDetails) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O que dizem nossos pacientes
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">{placeDetails.rating}</span>
                {renderStars(Math.round(placeDetails.rating))}
              </div>
              <span className="text-muted-foreground">
                Baseado em {placeDetails.user_ratings_total} avaliações
              </span>
            </div>
            <a
              href={`https://search.google.com/local/reviews?placeid=${PLACE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Ver todas no Google
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {placeDetails.reviews.length > 0 && (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {placeDetails.reviews.map((review, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-4">
                          {review.profile_photo_url && (
                            <img
                              src={review.profile_photo_url}
                              alt={review.author_name}
                              className="w-12 h-12 rounded-full object-cover"
                              loading="lazy"
                            />
                          )}
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{review.author_name}</h4>
                            <div className="flex items-center gap-2">
                              {renderStars(review.rating)}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {review.relative_time_description}
                            </p>
                          </div>
                        </div>
                        
                        <Quote className="w-8 h-8 text-primary/20 mb-2" />
                        
                        <p className="text-muted-foreground flex-1 line-clamp-6">
                          {review.text}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
