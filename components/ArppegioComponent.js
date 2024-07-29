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


const ArppegioComponent = ({ board, keyIndex, quality, shape, articleContent}) => {
  return (
    <Root>
      <Meta title={articleContent.title}></Meta>
      <ArticleCard article={articleContent}></ArticleCard>
      <MusicApp
        display="arppegio"
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
    </Root>
  );
};

export default ArppegioComponent;
