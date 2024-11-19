import Head from 'next/head';
import Script from 'next/script';

export default function Meta({ title }) {
    return (
        <Head>
            <Script>
                {`
                    (function(w, d, s, l, i) { 
                        w[l] = w[l] || []; 
                        w[l].push({ 
                            'gtm.start': new Date().getTime(), 
                            event: 'gtm.js' 
                        }); 
                        var f = d.getElementsByTagName(s)[0], 
                            j = d.createElement(s), 
                            dl = l !== 'dataLayer' ? '&l=' + l : ''; 
                        j.async = true; 
                        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; 
                        f.parentNode.insertBefore(j, f);
                    })(window, document, 'script', 'dataLayer', 'GTM-PBX6GPRP');
                `}
            </Script>
            <title>{title}</title>
            <meta
                name="format-detection"
                content="telephone=no, date=no, email=no, address=no"
            />
            <meta
                name="keywords"
                content="keys, sharps, scales, modes, arpeggios, C major, G major, D major, A major, E major, B major, F# major, C# major, F major, Bb major, Eb major, Ab major, Db major, Gb major, Cb major, natural minor, harmonic minor, melodic minor, dorian, phrygian, lydian, mixolydian, aeolian, locrian, major arpeggios, minor arpeggios, diminished arpeggios, augmented arpeggios"
            />
            <meta
                name="description"
                content="Explore comprehensive references for musical keys, scales, modes, and arpeggios. Find detailed information and resources for all keys, sharps, scales, modes, and arpeggios to enhance your musical knowledge."
            />
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3419259043892692"
                crossOrigin="anonymous"
            ></Script>
        </Head>
    );
}
