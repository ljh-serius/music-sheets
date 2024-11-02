// components/ArppegioComponent.js
import React from 'react';
import MusicApp from './MusicApp'; // Adjust the path if needed
import ArticleCard from './ArticleCard'; // Adjust the path if needed
import { styled } from '@mui/system';
import Meta from './ReferencesMeta';
import { Typography } from '@mui/material';

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ChordComponent = ({ board, keyIndex, quality, shape, articleContent}) => {
  return (
    <Root>
      <Meta title={articleContent.title}></Meta>
      <Typography variant="h3">
        {articleContent.title}
      </Typography>
      <MusicApp
        display="chord"
        board={board}
        keyIndex={keyIndex}
        quality={quality}
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

export default ChordComponent;
