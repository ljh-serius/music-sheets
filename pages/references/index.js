import References from '../../components/References';
import guitar from '../../config/guitar';

export const getStaticProps = async (context) => {
    const elements = guitar.notes.sharps.flatMap((key) => {
        console.log("GUITAR key", key)

        const chords = Object.keys(guitar.arppegios).flatMap((chordKey) => {
                console.log("CHORD KEY", chordKey);
                return [
                    ...guitar.shapes.names.map((shape) => {
                        console.log("CHORD SHAPE", shape);
                        return {
                            label: `Chord: ${guitar.arppegios[chordKey].name} (Shape: ${shape})`,
                            href: `/references/chords/${key}/${chordKey}/${shape}`,
                        }
                    })
                ];
            }
        );

        const arpeggios = Object.keys(guitar.arppegios).flatMap((arppegioKey) => [
            {
                label: `Arpeggio: ${guitar.arppegios[arppegioKey].name}`,
                href: `/references/arppegios/${key}/${arppegioKey}`,
            },
            ...guitar.shapes.names.map((shape) => ({
                label: `Arpeggio: ${guitar.arppegios[arppegioKey].name} (Shape: ${shape})`,
                href: `/references/arppegios/${key}/${arppegioKey}/${shape}`,
            })),
        ]);

        const scales = Object.keys(guitar.scales).flatMap((scaleKey) => {
            if (guitar.scales[scaleKey].isModal) {
                return [
                    ...guitar.scales[scaleKey].modes.map((mode) => ({
                        label: `Scale: ${guitar.scales[scaleKey].name}`,
                        href: `/references/scales/${key}/${scaleKey}/modal/${mode.name.toLowerCase()}`,
                    })),
                    ...guitar.scales[scaleKey].modes.flatMap((mode) => {
                        return guitar.shapes.names.map((shape) => ({
                            label: `Scale: ${guitar.scales[scaleKey].name}`,
                            href: `/references/scales/${key}/${scaleKey}/modal/${mode.name.toLowerCase()}/${shape}`,
                        }));
                    }),
                ];
            } else {
                return [
                    {
                        label: `Scale: ${guitar.scales[scaleKey].name}`,
                        href: `/references/scales/${key}/${scaleKey}/single`,
                    },
                    ...guitar.shapes.names.map((shape) => ({
                        label: `Scale: ${guitar.scales[scaleKey].name}`,
                        href: `/references/scales/${key}/${scaleKey}/single/${shape}`,
                    })),
                ];
            }
        });

        return [...chords, ...arpeggios, ...scales];
    });

    return {
        props: {
            elements,
        },
    };
};

export default References;
