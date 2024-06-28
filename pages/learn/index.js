import React from 'react';
import MusicApp from '../../components/MusicApp';

const LearnSongs = () => {

  return (
    <div>
      <MusicApp 
        board="learn"
        showFretboardControls={false} 
        showCircleOfFifths={false} 
        showFretboard={true} 
        showChordComposer={false} 
        showProgressor={true} 
        showSongsSelector={true} />
    </div>
  );
};

export default LearnSongs;
