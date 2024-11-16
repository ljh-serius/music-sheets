import React from 'react';
import MusicApp from '../../components/MusicApp';
import Meta from '../../components/ReferencesMeta';

const LearnSongs = () => {

  return (
    <div>
      <Meta title={'Learn Songs'}></Meta>
      <MusicApp 
        board="learn"
        showFretboardControls={false} 
        showCircleOfFifths={false} 
        showFretboard={true} 
        showChordComposer={false} 
        showProgressor={false} 
        showSongsSelector={true} />
    </div>
  );
};

export default LearnSongs;
