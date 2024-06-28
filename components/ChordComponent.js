// components/ArppegioComponent.js
import React from 'react';
import MusicApp from './MusicApp'; // Adjust the path if needed
import { styled } from '@mui/system';

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '100px 0',
});

const ChordComponent = ({ board, keyIndex, quality, shape}) => {
  console.log("props ", {board, keyIndex, quality, shape });
  return (
    <Root>
      <MusicApp
        display="chord"
        board={board}
        keyIndex={keyIndex}
        quality={quality}
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

export default ChordComponent;
