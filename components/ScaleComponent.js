// components/ScaleComponent.js
import React from 'react';
import MusicApp from './MusicApp'; // Adjust the path if needed
import { styled } from '@mui/system';

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '100px 0',
});

const ScaleComponent = ({ board, keyIndex, scale, modeIndex, shape }) => {
  return (
    <Root>
      <MusicApp
        display="scale"
        board={board}
        keyIndex={keyIndex}
        scale={scale}
        modeIndex={modeIndex}
        shape={shape}
        showFretboardControls={false}
        showCircleOfFifths={false}
        showFretboard={true}
        showChordComposer={false}
        showProgressor={false}
        showSongsSelector={false}
      />
    </Root>
  );
};

export default ScaleComponent;
