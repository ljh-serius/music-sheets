import References from '../../../components/References';
import guitar from '../../../config/guitar';

export const getStaticProps = async (context) => {
    const elements = guitar.notes.sharps.flatMap((key) => {
        const chords = Object.keys(guitar.arppegios).flatMap((chordKey) => {
            return [
                ...guitar.shapes.names.map((shape) => {
                    return {
                        label: `Chord: ${guitar.arppegios[chordKey].name} in ${key} (Shape: ${shape})`,
                        href: `/music-sheets/references/chords/${encodeURIComponent(key)}/${chordKey.replace('#', '%23')}/${shape}`,
                    };
                })
            ];
        });

        const arpeggios = Object.keys(guitar.arppegios).flatMap((arppegioKey) => {
            return [
                {
                    label: `Arpeggio: ${guitar.arppegios[arppegioKey].name} in ${key}`,
                    href: `/music-sheets/references/arppegios/${encodeURIComponent(key)}/${arppegioKey.replace('#', '%23')}`,
                },
                ...guitar.shapes.names.map((shape) => {
                    return {
                        label: `Arpeggio: ${guitar.arppegios[arppegioKey].name} in ${key} (Shape: ${shape})`,
                        href: `/music-sheets/references/arppegios/${encodeURIComponent(key)}/${arppegioKey.replace('#', '%23')}/${shape}/`,
                    };
                }),
            ];
        });

        const scales = Object.keys(guitar.scales).flatMap((scaleKey) => {
            if (guitar.scales[scaleKey].isModal === true) {
                return [
                    ...guitar.scales[scaleKey].modes.map((mode) => {
                        return {
                            label: `Scale: ${guitar.scales[scaleKey].name} in ${key} (Mode: ${mode.name})`,
                            href: `/music-sheets/references/scales/${encodeURIComponent(key)}/${scaleKey}/modal/${decodeURIComponent(mode.name.toLowerCase().replace(' ', '-')).replace('#', '%23')}`,
                        };
                    }),
                    ...guitar.scales[scaleKey].modes.flatMap((mode) => {
                        return guitar.shapes.names.map((shape) => {
                            return {
                                label: `Scale: ${guitar.scales[scaleKey].name} in ${key} (Mode: ${mode.name}, Shape: ${shape})`,
                                href: `/music-sheets/references/scales/${encodeURIComponent(key)}/${scaleKey}/modal/${decodeURIComponent(mode.name.toLowerCase().replace(' ', '-')).replace('#', '%23')}/${shape}`,
                            };
                        });
                    }),
                ];
            } else {
                return [
                    {
                        label: `Scale: ${guitar.scales[scaleKey].name} in ${key} (Single)`,
                        href: `/music-sheets/references/scales/${encodeURIComponent(key)}/${scaleKey}/single`,
                    },
                    ...guitar.shapes.names.map((shape) => {
                        return {
                            label: `Scale: ${guitar.scales[scaleKey].name} in ${key} (Single, Shape: ${shape})`,
                            href: `/music-sheets/references/scales/${encodeURIComponent(key)}/${scaleKey}/single/${shape}`,
                        };
                    }),
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
