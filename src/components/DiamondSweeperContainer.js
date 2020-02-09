import React from 'react';
import DiamondSweeperContext, { useDiamondSweeperContext } from '../context/diamondSweeperContext';
import Rows from './Rows';

const DiamondSweeperContainer = () => {
    const { baseCells } = useDiamondSweeperContext(DiamondSweeperContext);
    return (
        <div className='table-container'>
            {
                baseCells.map((row, index) => <Rows key={index} row={row} rowIndex={index} />)
            }
        </div>
    );
}

export default DiamondSweeperContainer;