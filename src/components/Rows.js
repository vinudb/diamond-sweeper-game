import React from 'react';
import Cell from './Cell';
import DiamondSweeperContext, { useDiamondSweeperContext } from '../context/diamondSweeperContext';

const Rows = ({ row, rowIndex }) => {
    const { onCellClick, clickedCellClass } = useDiamondSweeperContext(DiamondSweeperContext);
    return (
        <div className='row'>
            {
                row.map((cell, index) =>
                    <Cell 
                        key={index} 
                        cell={cell} 
                        cellIndex={[rowIndex, index]} 
                        onCellClick={onCellClick} 
                        clickedCellClass={clickedCellClass} />
                )
            }
        </div>
    );
}
export default Rows;