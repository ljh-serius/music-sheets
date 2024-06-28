// pages/references/[key]/chords/[chord]/[quality]/[shape]/index.js
import ChordComponent from '../../../../../../components/ChordComponent';
import guitar from '../../../../../../config/guitar';
import fs from 'fs';
import path from 'path';

export const getStaticPaths = async () => {
    const { notes, arppegios, shapes } = guitar;
    const paths = [];

    notes.sharps.forEach((key) => {
        const encodedKey = encodeURIComponent(key);
        if (arppegios && Object.keys(arppegios).length > 0) {
            Object.keys(arppegios).forEach((arppegioKey) => {
                const arppegio = arppegios[arppegioKey];
                if (arppegio) {
                    shapes.names.forEach((shape) => {
                        console.log({ key: encodedKey, chord: arppegioKey, shape: shape });
                        paths.push({ params: { key: encodedKey, chord: arppegioKey, shape: shape } });
                    });
                }
            });
        }
    });

    // Write the paths object to a log file
    const logFilePath = path.join(process.cwd(), 'paths-log.json');
    fs.writeFileSync(logFilePath, JSON.stringify(paths, null, 2));

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const { key, chord, shape } = params;
    const decodedKey = decodeURIComponent(key);
    const decodedQuality = decodeURIComponent(chord);
    const decodedShape = decodeURIComponent(shape)

    const keyIndex = guitar.notes.sharps.indexOf(decodedKey);
    const validShape = decodedShape || 'C';

    return {
        props: {
            keyIndex,
            quality: decodedQuality,
            shape: validShape,
            board: 'references'
        },
    };
};

export default ChordComponent;