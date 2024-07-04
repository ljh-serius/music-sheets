import React from 'react';
import MusicApp from '../../components/MusicApp';
import Head from 'next/head';

const ComposeAndShare = () => {
  return (
    <div>
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
