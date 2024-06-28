// pages/references/[key]/arppegios/[arppegio]/[quality]/[shape]/index.js
import ArpeggioComponent from '../../../../../../../components/ArppegioComponent';
import guitar from '../../../../../../../config/guitar';

export const getStaticPaths = async () => {
    const { notes, arppegios, shapes } = guitar;
    const paths = [];

    notes.sharps.forEach((key) => {
        if (arppegios && Object.keys(arppegios).length > 0) {
            Object.keys(arppegios).forEach((arppegioKey) => {
                const arppegio = arppegios[arppegioKey];
                if (arppegio) {
                    shapes.names.forEach((shape) => {
                        paths.push({ params: { key: key, chord: arppegioKey, shape: shape } });
                    });
                }
            });
        }
    });

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const { key, chord, shape} = params;

    const keyIndex = guitar.notes.sharps.indexOf(key);

    return {
        props: {
            keyIndex,
            quality: chord,
            shape: shape,
            board: 'references',
        }
    };
};

export default ArpeggioComponent;