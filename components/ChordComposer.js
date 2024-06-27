import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import ChordGraph from './ChordGraph';
import guitar from '../config/guitar'; // Import your guitar configuration
import PropTypes from 'prop-types';

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledFormControl = styled(FormControl)({
  width: '100%', // For mobile screens
});

const GraphContainer = styled('div')({
  height: 400,
  width: '100%',
  border: '1px solid black',
});

const ProgressionContainer = styled('div')({
});

const initialRomanNumerals = [
  'I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°',
  'i', 'ii°', 'III', 'iv', 'V', 'VI', 'VII'
];

const ChordComposer = ({ addChordToProgression, saveProgression, playProgression }) => {
  const [selectedKey, setSelectedKey] = useState('');
  const [selectedQuality, setSelectedQuality] = useState('major');
  const [chordPath, setChordPath] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [showInitial, setShowInitial] = useState(true);

  const handleKeyChange = (event) => {
    setSelectedKey(event.target.value);
  };

  const handleQualityChange = (event) => {
    setSelectedQuality(event.target.value);
  };

  const handleNodeClick = (nodeId) => {
    const chosenRoman = nodeId.split('-')[1];

    const newNodes = initialRomanNumerals
      .filter((numeral) => numeral !== chosenRoman)
      .map((roman, index) => ({
        id: `${selectedKey}-${roman}-${selectedQuality}-${nodes.length + index}`,
        label: roman,
        group: 'roman',
        x: Math.random() * 400,
        y: Math.random() * 400,
      }));

    const newEdges = newNodes.map((node) => ({
      id: `edge-${nodeId}-${node.id}`,
      from: nodeId,
      to: node.id,
    }));

    setNodes([...nodes.filter((n) => n.group !== 'roman'), { id: nodeId, label: chosenRoman, group: 'chosen' }, ...newNodes]);
    setEdges([...edges, ...newEdges]);
    setChordPath([...chordPath, { id: nodeId, label: chosenRoman }]);
    setShowInitial(false);
  };

  const handleSaveProgression = () => {
    chordPath.forEach((chord) => {
      addChordToProgression({
        keySignature: selectedKey,
        chord: chord.label,
      });
    });
    saveProgression();
  };

  const initialNodes = initialRomanNumerals.map((roman, index) => ({
    id: `${selectedKey}-${roman}-${selectedQuality}-${index}`,
    label: roman,
    group: 'roman',
    x: Math.random() * 400,
    y: Math.random() * 400,
  }));

  return (
      <Root>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ProgressionContainer>
              {chordPath.map((chord, index) => (
                <span key={index}>{chord.label} {index < chordPath.length - 1 ? '→' : ''} </span>
              ))}
            </ProgressionContainer>
          </Grid>
          <Grid item xs={12}>
            <StyledFormControl>
              <InputLabel>Key</InputLabel>
              <Select value={selectedKey} onChange={handleKeyChange}>
                {guitar.notes.sharps.map((note, index) => (
                  <MenuItem key={index} value={note}>{note}</MenuItem>
                ))}
              </Select>
            </StyledFormControl>
          </Grid>
          <Grid item xs={12}>
            <StyledFormControl>
              <InputLabel>Quality</InputLabel>
              <Select value={selectedQuality} onChange={handleQualityChange}>
                <MenuItem value="major">Major</MenuItem>
                <MenuItem value="minor">Minor</MenuItem>
              </Select>
            </StyledFormControl>
          </Grid>
        </Grid>
        <GraphContainer>
          <ChordGraph nodesData={showInitial ? initialNodes : nodes} edgesData={edges} onNodeClick={handleNodeClick} />
        </GraphContainer>
        <Button onClick={handleSaveProgression}>Save Progression</Button>
        <Button onClick={() => playProgression(chordPath)}>Play Progression</Button>
      </Root>
  );
};

ChordComposer.propTypes = {
  addChordToProgression: PropTypes.func.isRequired,
  playProgression: PropTypes.func.isRequired,
  saveProgression: PropTypes.func.isRequired,
};

export default ChordComposer;
