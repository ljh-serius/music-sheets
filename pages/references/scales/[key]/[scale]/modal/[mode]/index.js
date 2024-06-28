// pages\references\[key]\scales\[scale]\modal\[mode]\[shape]\index.js
import ScaleComponent from '../../../../../../components/ScaleComponent';
import guitar from '../../../../../../config/guitar';

export const getStaticPaths = async () => {
  const { notes, scales, shapes } = guitar;
  const paths = [];

  notes.sharps.forEach((key) => {
    Object.keys(scales).forEach((scaleKey) => {
      const scale = scales[scaleKey];
      if (scale.isModal) {
        scale.modes.forEach((mode) => {
            paths.push({ params: { key: key, scale: scaleKey, mode: mode.name.toLowerCase().replace(' ', '-')} });
        });
      }
    });
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { key, scale, mode } = params;

  const keyIndex = guitar.notes.sharps.indexOf(key);
  const scaleObj = guitar.scales[scale];
  let modeIndex = -1;
  if (scaleObj && scaleObj.isModal) {
    modeIndex = scaleObj.modes.findIndex((m) => m.name.toLowerCase().replace(' ', '-') === mode);
  }

  const validMode = modeIndex >= 0 ? modeIndex : 0;

  return {
    props: {
      keyIndex,
      scale: scale,
      modeIndex: validMode,
      board: 'references',
      shape: ''
    },
  };
};

export default ScaleComponent;