// pages/references/[key]/arppegios/[arppegio]/[quality]/[shape]/index.js
import ArpeggioComponent from '../../../../../../components/ArppegioComponent';
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
                        paths.push({ params: { key: encodedKey, arppegio: arppegioKey, shape: shape } });
                    });
                }
            });
        }
    });

    // Write the paths object to a log file
    const logFilePath = path.join(process.cwd(), 'paths-arppegios.json');
    fs.writeFileSync(logFilePath, JSON.stringify(paths, null, 2));

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const { key, arppegio, shape } = params;
    const decodedKey = decodeURIComponent(key);
    const decodedArppegio = decodeURIComponent(arppegio);
    const decodedShape = decodeURIComponent(shape).toUpperCase();

    const keyIndex = guitar.notes.sharps.indexOf(decodedKey);
    const validShape = decodedShape || 'C';

    return {
        props: {
            keyIndex,
            quality: decodedArppegio,
            shape: validShape,
            board: 'references'
        },
    };
};

export default ArpeggioComponent;