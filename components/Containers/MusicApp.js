import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { useCallback, useEffect } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FretboardControls from '../Pages/Fretboard/FretboardControls';
import Progressor from '../UpComingPages/Page.ChordProgressionsComposer/OldVersion.Trialed.NotSucceeded/Progressor';
import CircleOfFifths from '../Pages/CircleOfFifths/CircleOfFifths';
import FretboardDisplay from '../Pages/Fretboard/FretboardDisplay';
import ChordComposer from '../UpComingPages/Page.ChordProgressionsComposer/ChordComposer';
import withFretboardState from '../../hocs/withFretboardState';
import withChordProgression from '../../hocs/withChordProgression';
import withPlayback from '../../hocs/withPlayback';
import { connect } from 'react-redux';
import { addFretboard, updateStateProperty, setProgression, setProgressionKey } from '../../redux/actions';
import guitar from '../../config/guitar';
import SongsSelector from '../Pages/LearnSongs/SongsSelector';
import { useDispatch } from 'react-redux';
import Meta from '../Partials/Head';
import { GoogleTagManager } from '@next/third-parties/google'

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  width: '80%', // Default width for mobile and tablet
  '@media (min-width: 1024px)': { // Adjust the width for desktop (1024px and above)
    width: '65%',
  },
});

const FretboardContainer = styled('div')({
  width: '100%',
  marginTop: '20px',
  marginBottom: '20px',
});

const ChordPressionDisplay = styled('div')({
  marginTop: '20px',
  marginBottom: '20px',
});

const MusicApp = (props) => {
  const dispatch = useDispatch();

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
    updateBoards,
    keyIndex,
    scale,
    modeIndex,
    shape,
    quality,
    display,
    onNoteClick,
  } = props;

  const updateBoardsCallback = useCallback(() => {

    if (selectedFretboard?.id) {
      if (!isNaN(keyIndex)) {
        dispatch(updateBoards(selectedFretboard.id, 'keySettings.' + display, keyIndex));
      }

      if (!isNaN(modeIndex)) {
        dispatch(updateBoards(selectedFretboard.id, 'keySettings.mode', modeIndex));
      }

      if (display === 'scale') {
        dispatch(updateBoards(selectedFretboard.id, 'generalSettings.choice', 'scale'));
        dispatch(updateBoards(selectedFretboard.id, 'scaleSettings.scale', scale));
        if (guitar.scales[scale].isModal) {
          dispatch(updateBoards(selectedFretboard.id, 'modeSettings.mode', guitar.scales[scale].modes[modeIndex].name));
          if (shape !== '') {
            dispatch(updateBoards(selectedFretboard.id, 'modeSettings.shape', shape));
            dispatch(updateBoards(selectedFretboard.id, 'scaleSettings.shape', shape));
          }
        } else {
          dispatch(updateBoards(selectedFretboard.id, 'scaleSettings.shape', shape));
        }
      }

      if (display === 'arppegio') {
        dispatch(updateBoards(selectedFretboard.id, 'generalSettings.choice', 'arppegio'));
        dispatch(updateBoards(selectedFretboard.id, 'arppegioSettings.arppegio', quality));
        if (shape !== '') {
          dispatch(updateBoards(selectedFretboard.id, 'arppegioSettings.shape', shape));
        }
      }

      if (display === 'chord') {
        dispatch(updateBoards(selectedFretboard.id, 'generalSettings.choice', 'chord'));
        dispatch(updateBoards(selectedFretboard.id, 'chordSettings.chord', quality));
        if (shape !== '') {
          dispatch(updateBoards(selectedFretboard.id, 'chordSettings.shape', shape));
        }
      }
    }
  }, [dispatch, display, selectedFretboard, keyIndex, modeIndex, scale, shape, quality, updateBoards]);

  useEffect(() => {
    updateBoardsCallback();
  }, [updateBoardsCallback]);

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

  const { choice } = selectedFretboard.generalSettings;

  const selectedKey = selectedFretboard.keySettings[choice];
  const selectedShape = selectedFretboard[choice + 'Settings'].shape;
  const selectedArppegio = selectedFretboard.arppegioSettings.arppegio;
  const { fret } = selectedFretboard.chordSettings;
  const selectedChord = selectedFretboard.chordSettings.chord;
  const selectedScale = selectedFretboard.scaleSettings.scale;
  const { mode } = selectedFretboard.modeSettings;

  const components = (
    <Root>
      <GoogleTagManager gtmId="AW-16779476999" />
      <Meta 
        title="Musical Guitar Sheets | Complete References (5000 pages for FREE / No Subscription / No Fees / No Payments)" 
        description="Explore my complete references for musical keys, scales, modes, and arpeggios. Find detailed information and resources for all keys, sharps, scales, modes, and arpeggios to enhance your musical knowledge" 
      />
      {showAddMoreFretboardsButton && (
        <IconButton onClick={createNewBoardDisplay}>
          <AddCircleOutlineIcon />
        </IconButton>
      )}
      {showFretboard && (
        <FretboardContainer>
          <FretboardDisplay
            selectedFretboard={selectedFretboard}
            boards={boards}
            handleFretboardSelect={handleFretboardSelect}
            onElementChange={onElementChange}
            onNoteClick={onNoteClick}
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
              choice={choice}
              onCleanFretboard={cleanFretboard}
              selectedKey={isNaN(selectedKey) ? '' : selectedKey}
              onCopyLink={() => console.log('onCopyLink')}
              selectedMode={mode || ''}
              selectedScale={selectedScale || ''}
              selectedChord={selectedChord || ''}
              selectedShape={selectedShape || ''}
              selectedArppegio={selectedArppegio}
              selectedFret={fret}
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
            onElementChange={onElementChange}
            selectedArppegio={selectedArppegio}
            selectedKey={selectedKey}
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
  const filteredBoards = state.fretboard.components.filter(board => board.generalSettings.page === ownProps.board);
  return {
    boards: filteredBoards,
    progressions: state.partitions,
  };
};

const mapDispatchToProps = {
  addFretboard,
  updateBoards: updateStateProperty,
  setProgression,
  setProgressionKey,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFretboardState(withChordProgression(withPlayback(MusicApp))));
