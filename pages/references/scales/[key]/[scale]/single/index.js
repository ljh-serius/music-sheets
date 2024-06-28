//pages\references\[key]\scales\[scale]\single\[shape]\index.js
import ScaleComponent from '../../../../../../components/ScaleComponent';
import guitar from '../../../../../../config/guitar';

export const getStaticPaths = async () => {
    const { notes, scales, shapes } = guitar;
    const paths = [];

    notes.sharps.forEach((key) => {
        Object.keys(scales).forEach((scaleKey) => {
            const scale = scales[scaleKey];
            paths.push({ params: { key: key, scale: scaleKey } });
        });
    });

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const { key, scale } = params;

    const keyIndex = guitar.notes.sharps.indexOf(key);
    const modeIndex = -1;

    return {
        props: {
            keyIndex,
            scale: scale,
            modeIndex,
            board: 'references', 
            shape: ''
        },
    };
};


export default ScaleComponent;