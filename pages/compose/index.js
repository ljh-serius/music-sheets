import React from 'react';
import MusicApp from '../../components/MusicApp';
import Meta from '../../components/ReferencesMeta';

const ComposeAndShare = () => {
  return (
    <div>
      <Meta title={'Compose And Share Music'}></Meta>
      <MusicApp 
        board="compose"
        showFretboardControls={false} 
        showCircleOfFifths={false} 
        showFretboard={true} 
        showChordComposer={false} 
        showProgressor={false} />
    </div>
  );
};

export default ComposeAndShare;
