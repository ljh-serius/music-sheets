// components/ScaleComponent.js
import React from 'react';
import MusicApp from './MusicApp'; // Adjust the path if needed
import { styled } from '@mui/system';
import ArticleCard from './ArticleCard'; // Adjust the path if needed
import Meta from './ReferencesMeta';

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ScaleComponent = ({ board, keyIndex, scale, modeIndex, shape, articleContent }) => {
  return (
    <Root>
      <Meta title={articleContent.title}></Meta>
      <ArticleCard article={articleContent}></ArticleCard>
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
    </Root>
  );
};

export default ScaleComponent;
