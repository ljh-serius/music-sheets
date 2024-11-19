import React from 'react';
import MusicApp from '../../components/Containers/MusicApp';
import Meta from '../../components/Partials/Head';

const TheCircleOfFifths = () => {

  return (
    <div>
      <Meta title={'Circle Of Fifths'}></Meta>
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
