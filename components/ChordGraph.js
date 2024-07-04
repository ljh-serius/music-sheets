import React, { useEffect, useRef } from 'react';
import vis from 'vis-network';

const ChordGraph = ({ nodesData, edgesData, onNodeClick }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const nodes = new vis.DataSet(nodesData);
        const edges = new vis.DataSet(edgesData);

        const data = { nodes, edges };
        const options = {
            interaction: {
                hover: true,
            },
            nodes: {
                shape: 'dot',
                size: 20,
            },
            edges: {
                width: 2,
                smooth: true,
            },
        };

        const network = new Network(containerRef.current, data, options);

        network.on('click', (params) => {
            if (params.nodes.length > 0) {
                const nodeId = params.nodes[0];
                    (nodeId);
            }
        });

        return () => {
            network.destroy();
        };
    }, [nodesData, edgesData, onNodeClick]);

    return <div ref={containerRef} style={{ height: '400px', width: '100%' }} />;
};

export default ChordGraph;
    