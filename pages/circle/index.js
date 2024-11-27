import React from 'react';
import MusicApp from '../../components/Containers/MusicApp';
import Meta from '../../components/Partials/Head';

const TheCircleOfFifths = () => {

  return (
    <div>
      <Meta
       title="Interactive Circle Of Fifths For Musical Guitar Sheets, Spinnable, Colored and Pointing To The Major Scale And Its Relative Minor"
       description="Play And Visualize The Keys On The Circle Of Fifths While It Being Colored And Spinned With Red And Blue."></Meta>
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
