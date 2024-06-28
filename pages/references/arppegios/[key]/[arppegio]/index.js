// pages/references/[key]/arppegios/[arppegio]/[quality]/[shape]/index.js
import ArpeggioComponent from '../../../../../components/ArppegioComponent';
import guitar from '../../../../../config/guitar';
import fs from 'fs';
import path from 'path';

export const getStaticPaths = async () => {
    const { notes, arppegios } = guitar;
    const paths = [];

    notes.sharps.forEach((key) => {
        const encodedKey = encodeURIComponent(key);
        if (arppegios && Object.keys(arppegios).length > 0) {
            Object.keys(arppegios).forEach((arppegioKey) => {
                const arppegio = arppegios[arppegioKey];
                if (arppegio) {
                    paths.push({ params: { key: encodedKey, arppegio: arppegioKey } });
                }
            });
        }
    });

    
    // Write the paths object to a log file
    const logFilePath = path.join(process.cwd(), 'shapeless-arppegios.json');
    fs.writeFileSync(logFilePath, JSON.stringify(paths, null, 2));


    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const { key, arppegio } = params;
    const decodedKey = decodeURIComponent(key);
    const decodedArppegio = decodeURIComponent(arppegio);

    const keyIndex = guitar.notes.sharps.indexOf(decodedKey);

    return {
        props: {
            keyIndex,
            quality: decodedArppegio,
            shape: '',
            board: 'references'
        },
    };
};

export default ArpeggioComponent;