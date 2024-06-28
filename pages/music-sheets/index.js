import React from 'react';
import MusicApp from '../../components/MusicApp';

const PlayAndVisualize = () => {
  return (
    <div>
        <MusicApp 
            board="home"
            showFretboardControls={true} 
            showCircleOfFifths={false} 
            showFretboard={true} 
            showChordComposer={false} 
            showProgressor={false} 
            showSongsSelector={false} />
    </div>
  );
};

export default PlayAndVisualize;
