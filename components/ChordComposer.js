import React, { useState } from 'react';
import { FormControl, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import ChordGraph from './ChordGraph';
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
  const [chordPath, setChordPath] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [showInitial, setShowInitial] = useState(true);

  const handleNodeClick = (nodeId) => {
    const chosenRoman = nodeId.split('-')[1];

    const newNodes = initialRomanNumerals
      .filter((numeral) => numeral !== chosenRoman)
      .map((roman, index) => ({
        id: `$${roman}-${nodes.length + index}-${chordPath.join('-')}`,
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

  const initialNodes = initialRomanNumerals.map((roman, index) => ({
    id: `${roman}-${index}`,
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
        </Grid>
        <GraphContainer>
          <ChordGraph nodesData={showInitial ? initialNodes : nodes} edgesData={edges} onNodeClick={handleNodeClick} />
        </GraphContainer>
      </Root>
  );
};

ChordComposer.propTypes = {
  addChordToProgression: PropTypes.func.isRequired,
  playProgression: PropTypes.func.isRequired,
  saveProgression: PropTypes.func.isRequired,
};

export default ChordComposer;
