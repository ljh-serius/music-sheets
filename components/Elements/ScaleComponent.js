// components/ScaleComponent.js
import React from 'react';
import MusicApp from '../Containers/MusicApp'; // Adjust the path if needed
import { styled } from '@mui/system';
import ArticleCard from '../Listing/ArticleCard'; // Adjust the path if needed
import Meta from '../Partials/Head';

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ScaleComponent = ({ board, keyIndex, scale, modeIndex, shape, articleContent }) => {
  return (
    <Root>
      <Meta title={articleContent.title}></Meta>
      <MusicApp
        display="scale"
        board={board}
        keyIndex={keyIndex}
        scale={scale}
        modeIndex={modeIndex}
        shape={shape}
        showFretboardControls={false}
        showCircleOfFifths={false}
        showFretboard={true}
        showChordComposer={false}
        showProgressor={false}
        showSongsSelector={false}
      />
      <ArticleCard article={articleContent}></ArticleCard>
    </Root>
  );
};

export default ScaleComponent;
