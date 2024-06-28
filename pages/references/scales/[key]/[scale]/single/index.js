//pages\references\[key]\scales\[scale]\single\[shape]\index.js
import ScaleComponent from '../../../../../../components/ScaleComponent';
import guitar from '../../../../../../config/guitar';

export const getStaticPaths = async () => {
    const { notes, scales, shapes } = guitar;
    const paths = [];

    notes.sharps.forEach((key) => {
        const encodedKey = encodeURIComponent(key);
        Object.keys(scales).forEach((scaleKey) => {
            const scale = scales[scaleKey];
            paths.push({ params: { key: encodedKey, scale: scaleKey } });
        });
    });

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const { key, scale, shape } = params;
    const decodedKey = decodeURIComponent(key);
    const decodedScale = decodeURIComponent(scale);
    const decodedShape = decodeURIComponent(shape).toUpperCase();

    const keyIndex = guitar.notes.sharps.indexOf(decodedKey);
    const modeIndex = -1;

    return {
        props: {
            keyIndex,
            scale: decodedScale,
            modeIndex,
            board: 'references', // Ensure display is provided
        },
    };
};


export default ScaleComponent;