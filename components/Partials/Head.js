import Head from 'next/head';

export default function Meta({ title, description }) {
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
                content={description}
            />
            <script src="https://raw.githubusercontent.com/ljh-serius/GTAG/refs/heads/main/gtag.js"></script>
            <script src="https://raw.githubusercontent.com/ljh-serius/gtag-subscribe/refs/heads/main/gtag2.js"></script>
            <script src="https://raw.githubusercontent.com/ljh-serius/ad-blocker-custon-choice/refs/heads/main/ads-blocking.js"></script>
            <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3419259043892692"
                crossOrigin="anonymous"
            ></script>
            <meta name="google-site-verification" content="_DI-fYrpMShM8WqrOzlW7z2MI2E3q8CEVtyZ5usRGms" />
        </Head>
    );
}
