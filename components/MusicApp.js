import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FretboardControls from '../components/FretboardControls';
import Progressor from '../components/Progressor';
import CircleOfFifths from '../components/CircleOfFifths';
import FretboardDisplay from '../components/FretboardDisplay';
import ChordComposer from '../components/ChordComposer';
import withFretboardState from '../hocs/withFretboardState';
import withChordProgression from '../hocs/withChordProgression';
import withPlayback from '../hocs/withPlayback';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { addFretboard, updateStateProperty, setProgression, setProgressionKey } from '../redux/actions';
import guitar from '../config/guitar';
import SongsSelector from '../components/SongsSelector';

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '65%',
  margin: '0 auto',
});

const FretboardContainer = styled('div')({
  width: '100%',
  overflowX: 'auto',
  maxWidth: '100vw',
});

const ShadowyContainer = styled('div')({
  backgroundColor: '#ffffff',
  boxShadow: '0 -2px 10px rgba(0,0,0,0.2)',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  zIndex: 1000,
});

const ButtonGroup = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
});

const ChordPressionDisplay = styled('div')({});

const MusicApp = (props) => {
  const router = useRouter();
  const {
    boards,
    selectedFretboard,
    handleFretboardSelect,
    handleChoiceChange,
    createNewBoardDisplay,
    cleanFretboard,
    onElementChange,
    addChordToProgression,
    saveProgression,
    playProgression,
    playSelectedNotes,
    progressions,
    setProgression,
    setProgressionKey,
    getScaleNotes,
    selectedFretboardIndex,
    showFretboardControls,
    showProgressor,
    showCircleOfFifths,
    showChordComposer,
    showSongsSelector,
    showAddMoreFretboardsButton,
    showFretboard,
  } = props;

  if (!selectedFretboard) {
    return <div>Loading...</div>;
  }

  const getCircleData = () => {
    const defaultPoint = { tone: 'C', degree: 'Major' };
    if (selectedFretboardIndex === -1 || !selectedFretboard) return defaultPoint;
    const selectedKey = selectedFretboard.keySettings[selectedFretboard.generalSettings.choice];
    const selectedTone = guitar.notes.flats[selectedKey];
    return { tone: selectedTone, degree: getDegree(selectedFretboard.generalSettings.choice) };
  };

  const getDegree = (choice) => {
    const defaultDegree = 'Major';
    if (!choice || selectedFretboardIndex === -1 || !boards.length) return defaultDegree;
    if (choice === 'scale') {
      const scale = guitar.scales[selectedFretboard.scaleSettings.scale];
      return scale ? scale.degree : defaultDegree;
    } else if (choice === 'chord' || choice === 'arppegio') {
      const chord = guitar.arppegios[selectedFretboard[choice + 'Settings'][choice]];
      return chord ? chord.quality : defaultDegree;
    }
    return defaultDegree;
  };

  const circleData = getCircleData();
  const currentScale = selectedFretboardIndex >= 0 && selectedFretboard ? guitar.scales[selectedFretboard.scaleSettings.scale] : 'major';
  const scaleModes = currentScale?.isModal ? currentScale.modes : [];

  const components = (
    <Root>
      {showAddMoreFretboardsButton && (
        <IconButton onClick={createNewBoardDisplay}>
          <AddCircleOutlineIcon />
        </IconButton>
      )}
      {showFretboard && (
        <FretboardContainer>
          <FretboardDisplay
            boards={boards}
            handleFretboardSelect={handleFretboardSelect}
            onElementChange={onElementChange}
          />
        </FretboardContainer>
      )}
      <div>
        <section className="controls">
          {showFretboardControls && (
            <FretboardControls
              playSelectedNotes={playSelectedNotes}
              handleChoiceChange={handleChoiceChange}
              scaleModes={scaleModes}
              arppegiosNames={Object.keys(guitar.arppegios)}
              choice={selectedFretboard.generalSettings.choice}
              onCleanFretboard={cleanFretboard}
              selectedKey={parseInt(selectedFretboard.keySettings[selectedFretboard.generalSettings.choice])}
              onCopyLink={() => navigator.clipboard.writeText(window.location.href).then(() => alert("The link has been copied successfully."), () => alert("Oops, something went wrong. You can copy the link directly."))}
              selectedMode={parseInt(selectedFretboard.modeSettings.mode || 0)}
              selectedScale={selectedFretboard.scaleSettings.scale || ''}
              selectedChord={selectedFretboard.chordSettings.chord || ''}
              selectedShape={selectedFretboard[selectedFretboard.generalSettings.choice + 'Settings'].shape || ''}
              selectedArppegio={selectedFretboard.arppegioSettings.arppegio}
              selectedFret={selectedFretboard.chordSettings.fret}
              addChordToProgression={addChordToProgression}
              saveProgression={saveProgression}
              playProgression={playProgression}
              progressions={progressions.progression}
              onElementChange={onElementChange}
            />
          )}
        </section>
        {showCircleOfFifths && (
          <CircleOfFifths
            tone={circleData.tone}
            onElementChange={onElementChange}
            selectedFretboardIndex={selectedFretboardIndex}
            quality={circleData.degree}
          />
        )}
        {showChordComposer && (
          <ChordComposer
            addChordToProgression={addChordToProgression}
            playProgression={playProgression}
            saveProgression={saveProgression}
          />
        )}
        {showProgressor && (
          <Progressor
            className={ChordPressionDisplay}
            progression={progressions.progression}
            setProgression={setProgression}
            playProgression={playProgression}
            setProgressionKey={setProgressionKey}
            selectedKey={progressions.key}
            getScaleNotes={getScaleNotes}
          />
        )}
        {showSongsSelector && (
          <SongsSelector 
            playProgression={playProgression}
            getScaleNotes={getScaleNotes}
          />
        )}
      </div>
    </Root>
  );

  return (
    <>
      {components}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const filteredBoards = state.fretboard.components.filter(board => board.generalSettings.page === ownProps.display);
  return {
    boards: filteredBoards,
    progressions: state.partitions
  };
};

const mapDispatchToProps = {
  addFretboard,
  updateStateProperty,
  setProgression,
  setProgressionKey,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFretboardState(withChordProgression(withPlayback(MusicApp))));