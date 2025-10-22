import { thirdPartyTags } from '@/config/thirdPartyTags';

const BodyTags = () => {
  return (
    <>
      {/* Google Tag Manager (noscript) */}
      {thirdPartyTags.gtm.enabled && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${thirdPartyTags.gtm.containerId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      )}
      
      {/* Add more body tags here as needed */}
    </>
  );
};

export default BodyTags;
