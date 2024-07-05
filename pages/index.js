import React from 'react';
import MusicApp from '../components/MusicApp';
import Meta from '../components/ReferencesMeta';

const PlayAndVisualize = () => {
  return (
    <div>
      <Meta title={"Play And Visualize"}></Meta>
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
