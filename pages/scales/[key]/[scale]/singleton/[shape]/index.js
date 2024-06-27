// pages/scales/[key]/[scale]/[mode]/[shape].js
import { useRouter } from 'next/router';
import React from 'react';
import MusicApp from '../../../../../../components/MusicApp';
import { styled  } from '@mui/system';

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '100px 0',
});

const Scales = () => {
  const router = useRouter();
  const { key, scale, mode, shape } = router.query;

  return (
    <Root>
        <MusicApp 
          display="scales"
          key={key}
          scale={scale}
          shape={shape}
          showFretboardControls={true} 
          showCircleOfFifths={false} 
          showFretboard={true} 
          showChordComposer={false} 
          showProgressor={false} 
          showSongsSelector={false} />
    </Root>
  );
};

export default Scales;
