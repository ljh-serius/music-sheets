import React from 'react';
import MusicApp from '../components/Containers/MusicApp';
import Meta from '../components/ReferencesMeta';

const ComposeAndShare = () => {
  return (
    <div>
      <Meta title={'Compose And Share Music'}></Meta>
      <MusicApp 
        board="compose"
        showFretboardControls={false} 
        showCircleOfFifths={true} 
        showFretboard={true} 
        showChordComposer={true} 
        showProgressor={false} />
    </div>
  );
};

export default ComposeAndShare;
