import { useEffect } from 'react';
import Script from 'next/script';

const BottomOfMusicApp = () => {
    useEffect(() => {
        // Ensure `adsbygoogle` is initialized after the component mounts
        try {
            if (typeof window !== "undefined" && window.adsbygoogle) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (error) {
            console.error("AdSense error:", error);
        }
    }, []);

    return (
        <div>
            <ins
                className="adsbygoogle"
                styles={{ display: 'block' }}
                data-ad-client="ca-pub-3419259043892692"
                data-ad-slot="7916719356"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
            <Script
                id="adsbygoogle-script-bottom"
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                strategy="afterInteractive" // Ensures script loads only on the client side
            />
        </div>
    );
};

export default BottomOfMusicApp;
