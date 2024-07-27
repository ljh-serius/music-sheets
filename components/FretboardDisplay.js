import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import guitar from '../config/guitar';
import * as Tone from 'tone';
import { styled } from '@mui/system';
import classNames from 'classnames';

const FretboardContainer = styled('div')({
  width: '100%',
  overflowX: 'auto',
  maxWidth: '100vw',
  '&::-webkit-scrollbar': {
    width: '8px',
    borderRadius: '10px',
    height: '8px'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'darkgrey',
    borderRadius: '10px',
    height: '8px'
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: 'grey',
    height: '8px'
  },
});

const FretboardTable = styled('table')({
  maxWidth: '1240px',
  width: '1240px',
  minWidth: '1000px',
});

const Table = styled('table')({
  borderSpacing: 0,
  width: '100%',
});

const TableRow = styled('tr')({
  margin: 0,
  padding: 0,
});

const TableData = styled('td')({
  height: '50px',
  padding: 0,
  borderRight: '1px solid black',
  verticalAlign: 'middle',
  position: 'relative',
  cursor: 'pointer',
  textAlign: 'center', // Center the content horizontally
});

const Note = styled('div')({
  display: 'inline-block',
  position: 'relative',
  cursor: 'pointer',
  lineHeight: '36px',
  zIndex: 1000,
  transition: 'transform 0.1s ease-in-out', // Add transition for scaling effect
});

const NoteContent = styled('span')({
  fontSize: '20px',
  fontWeight: 'bold',
  textAlign: 'center', // Center the text inside the note
});

const NoteLine = styled('hr')({
  position: 'absolute',
  width: '100%',
  top: '50%',
  left: 0,
  margin: 0,
  padding: 0,
  border: 'none',
  borderTop: '1px solid black',
  transform: 'translateY(-50%)',
});

const FretboardDisplay = ({
  boards,
  handleFretboardSelect,
  onElementChange,
  onNoteClick,
  selectedFretboard
}) => {

  const calculateOctave = (stringIndex, fretIndex) => {
    console.log("string index", stringIndex)
      const baseOctaves = selectedFretboard.generalSettings.baseOctaves;
      let octave = baseOctaves[stringIndex];
      console.log(baseOctaves)
      const tuning = selectedFretboard.generalSettings.tuning;
      const notes = guitar.notes.sharps;

      // Calculate the number of half steps from the open string
      let halfSteps = (tuning[stringIndex] + fretIndex) % 12;
      let currentNoteIndex = tuning[stringIndex] % 12;

      // Loop through each fret and determine if we pass a B note
      for (let i = 0; i <= fretIndex; i++) {
          const note = notes[(currentNoteIndex + i) % 12];
          if (note === 'B') {
              octave++;
          }
      }

      console.log(octave)
      return octave;
  };

  const makeSound = (note, octave, stringIndex, fretIndex, fretboardIndex) => {
    const noteElement = document.getElementById(`note-${fretboardIndex}-${stringIndex}-${fretIndex}`);
    if (noteElement) {
      noteElement.classList.add('playing');
      setTimeout(() => {
        noteElement.classList.remove('playing');
      }, 500); // Adjust the timeout duration as needed
    }
  };

  const fretboardElements = boards.map((fretboard, fretboardIndex) => {
    const newRows = [...Array(fretboard.generalSettings.nostrs)].map((_, i) => (
      <TableRow key={`row-${fretboardIndex}-${i}`}>
        <TableData width="20px">
          <input
            value={guitar.notes.flats[fretboard.generalSettings.tuning[i]] || ''}
            onChange={(e) => {
              const newTuning = [...fretboard.generalSettings.tuning];
              if (e.target.value !== '') {
                newTuning[i] = guitar.notes.flats.indexOf(e.target.value);
                onElementChange(newTuning.join('-'), 'tuning');
              }
            }}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid #ccc',
              textAlign: 'center',
              outline: 'none',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
            }}
          />
        </TableData>

        {[...Array(fretboard.generalSettings.nofrets)].map((_, j) => {
          const note = fretboard[fretboard.generalSettings.choice + 'Settings'].fretboard[i][j];
          const displayedNoteIndex = (fretboard.generalSettings.tuning[i] + j) % 12;
          const displayedNote = guitar.notes.sharps[displayedNoteIndex];
          const octave = Math.floor((fretboard.generalSettings.tuning[i] + j) / 12) + 4;

          let newChoice = fretboard.generalSettings.choice;
          let noteIndex = '';

          if (fretboard.generalSettings.choice === 'scale' && fretboard.scaleSettings.scale) {
            const isModalRequest = guitar.scales[fretboard.scaleSettings.scale].isModal;
            newChoice = isModalRequest ? 'mode' : 'scale';
            noteIndex = fretboard[newChoice + 'Settings'].notes.indexOf(note.current);
          }

          const rootNote = note.show && (noteIndex === 0 || note.interval === '1') ? 'root-note': '';
          const thirdNote = note.show && (noteIndex === 2 || ['3', 'b3'].includes(note.interval)) ? 'third-note' : '';
          const fifthNote = note.show && (noteIndex === 4 || note.interval === '5') ? 'fifth-note' : '';
          const seventhNote = note.show && (noteIndex === 6 || ['7', 'b7'].includes(note.interval)) ? 'seventh-note' : '';

          const noteClassNames = classNames({
            'note': note.show,
            'root-note': rootNote,
            'third-note': thirdNote,
            'fifth-note': fifthNote,
            'seventh-note': seventhNote,
          });

          return (
            <TableData
              key={`note-${fretboardIndex}-${i}-${j}`}
              onClick={() => { onNoteClick(displayedNote +  calculateOctave(i, j), i, j);}}
            >
              <Note
                id={`note-${fretboardIndex}-${i}-${j}`}
                className={noteClassNames}
              >
                {note.show && <NoteContent>{displayedNote}</NoteContent>}
              </Note>
              <NoteLine />
            </TableData>
          );
        })}
      </TableRow>
    ));

    const newHeads = [
      <th key="tuner">
        <span className="fretNumber">tuner</span>
      </th>,
      [...Array(fretboard.generalSettings.nofrets)].map((_, i) => (
        <th key={`head-${fretboardIndex}-${i}`} width={fretboard.generalSettings.nofrets - i + 30}>
          <span className="fretNumber">{i}</span>
        </th>
      )),
    ];

    return (
      <FretboardContainer
        key={`fretboard-${fretboardIndex}`}
        onFocus={() => handleFretboardSelect(fretboardIndex)}
        onClick={() => handleFretboardSelect(fretboardIndex)}
      >
        <label style={{ fontWeight: 'bold' }}>
          #Strings:
          <input
            type="number"
            key="strings-changer"
            style={{ margin: '6px' }}
            value={fretboard.generalSettings.nostrs}
            onChange={(e) => onElementChange(e.target.value, 'nostrs')}
            min="4"
            max="7"
          />
        </label>
        <label style={{ fontWeight: 'bold' }}>
          #Frets:
          <input
            type="number"
            key="frets-changer"
            style={{ margin: '6px' }}
            value={fretboard.generalSettings.nofrets}
            onChange={(e) => onElementChange(e.target.value, 'nofrets')}
            min="12"
            max="24"
          />
        </label>
        <FretboardTable>
          <tbody>{newRows}</tbody>
          <tfoot>
            <tr>{newHeads}</tr>
          </tfoot>
        </FretboardTable>
      </FretboardContainer>
    );
  });

  return <div>{fretboardElements}</div>;
};

FretboardDisplay.propTypes = {
  boards: PropTypes.array,
  handleFretboardSelect: PropTypes.func.isRequired,
  onElementChange: PropTypes.func.isRequired,
  onNoteClick: PropTypes.func.isRequired,
};

export default FretboardDisplay;
