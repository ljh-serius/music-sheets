// pages\references\[key]\scales\[scale]\modal\[mode]\[shape]\index.js
import ScaleComponent from '../../../../../../../../components/ScaleComponent';
import guitar from '../../../../../../../../config/guitar';

export const getStaticPaths = async () => {
  const { notes, scales, shapes } = guitar;
  const paths = [];

  notes.sharps.forEach((key) => {
    const encodedKey = encodeURIComponent(key);
    Object.keys(scales).forEach((scaleKey) => {
      const scale = scales[scaleKey];
      if (scale.isModal) {
        scale.modes.forEach((mode) => {
          shapes.names.forEach((shape) => {
            paths.push({ params: { key: encodedKey, scale: scaleKey, mode: mode.name.toLowerCase(), shape: shape } });
          });
        });
      }
    });
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { key, scale, mode, shape } = params;
  const decodedKey = decodeURIComponent(key);
  const decodedScale = decodeURIComponent(scale);
  const decodedMode = decodeURIComponent(mode || '');
  const decodedShape = decodeURIComponent(shape).toUpperCase();

  const keyIndex = guitar.notes.sharps.indexOf(decodedKey);
  const scaleObj = guitar.scales[decodedScale];
  let modeIndex = -1;
  if (scaleObj && scaleObj.isModal) {
    modeIndex = scaleObj.modes.findIndex((m) => m.name.toLowerCase() === decodedMode);
  }

  const validMode = modeIndex >= 0 ? modeIndex : 0;
  const validShape = decodedShape || 'C';

  return {
    props: {
      keyIndex,
      scale: decodedScale,
      modeIndex: validMode,
      shape: validShape,
      board: 'references'
    },
  };
};

export default ScaleComponent;