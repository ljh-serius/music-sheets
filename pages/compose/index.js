import React from 'react';
import MusicApp from '../../components/MusicApp';

const ComposeAndShare = () => {
  return (
    <div>
      <MusicApp 
        display="compose"
        showFretboardControls={false} 
        showCircleOfFifths={false} 
        showFretboard={true} 
        showChordComposer={true} 
        showProgressor={false} />
    </div>
  );
};

export default ComposeAndShare;
