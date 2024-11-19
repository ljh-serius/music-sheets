import Head from 'next/head';
import Script from 'next/script';

export default function Meta({ title }) {
    return (
        <Head>
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
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5FJXJGLWWH"></Script>
            <Script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){ dataLayer.push(arguments) }
                gtag('js', new Date());

                gtag('config', 'G-5FJXJGLWWH');
            </Script>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3419259043892692"
                crossOrigin="anonymous"
            ></Script>
        </Head>
    );
}
