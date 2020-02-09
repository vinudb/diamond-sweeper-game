import React from 'react';
import DiamondSweeperContext, { useDiamondSweeperContext } from '../context/diamondSweeperContext';

const Cell = ({ cell, cellIndex }) => {
    const { onCellClick } = useDiamondSweeperContext(DiamondSweeperContext);
    return (
        <div className={`cell ${cell.applyClass}`} onClick={() => onCellClick(cellIndex, cell.cellNum)}></div>
    );
}

export default Cell;