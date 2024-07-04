// pages/references/[key]/arppegios/[arppegio]/[quality]/[shape]/index.js
import ArpeggioComponent from '../../../../../../components/ArppegioComponent';
import guitar from '../../../../../../config/guitar';
import fs from 'fs';
import path from 'path';

export const getStaticPaths = async () => {
    const { notes, arppegios, shapes } = guitar;
    const paths = [];

    notes.sharps.forEach((key) => {
        if (arppegios && Object.keys(arppegios).length > 0) {
            Object.keys(arppegios).forEach((arppegioKey) => {
                const arppegio = arppegios[arppegioKey];
                if (arppegio) {
                    shapes.names.forEach((shape) => {
                        paths.push({ params: { key: key, arppegio: arppegioKey, shape: shape } });
                    });
                }
            });
        }
    });

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const { key, arppegio, shape } = params;

    const keyIndex = guitar.notes.sharps.indexOf(key);
    const validShape = shape || 'C';

    // Generate the title based on the params
    const title = `Arppegio: ${guitar.arppegios[arppegio].name} in ${key} (Shape: ${shape})`;

    // Define the path to the JSON file
    const fileName = `article_${title.replace(/[^\w\s]/gi, '').replace(/\s/g, '_')}.json`;
    const filePath = path.join(process.cwd(), 'articles', fileName);
    
    // Read the content of the JSON file
    let articleContent = {};
    try {
        const fileContent = await fs.promises.readFile(filePath, 'utf-8');
        articleContent = JSON.parse(fileContent);
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
    }
    
    return {
        props: {
            keyIndex,
            quality: arppegio,
            shape: validShape,
            board: 'references'
        },
    };
};

export default ArpeggioComponent;