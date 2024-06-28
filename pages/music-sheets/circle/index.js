import React from 'react';
import MusicApp from '../../../components/MusicApp';

const TheCircleOfFifths = () => {

  return (
    <div>
      <MusicApp 
        board="circle"
        showFretboardControls={false} 
        showCircleOfFifths={true} 
        showFretboard={false} 
        showChordComposer={false} 
        showProgressor={false} 
        showSongsSelector={false} />
    </div>
  );
};

export default TheCircleOfFifths;
