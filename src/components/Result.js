import React from 'react';
import DiamondSweeperContext, { useDiamondSweeperContext } from '../context/diamondSweeperContext';

const Result = () => {
    const { onResetClick, clickCount, diamondCounter, diamondMaxCount } = useDiamondSweeperContext(DiamondSweeperContext);
    return (
        <div className='title'>
            <br />
            <h3 className='title'>Total Clicks</h3>
            <h1>{clickCount}</h1>
            <br />
            <h3 className='title'>Diamonds Won</h3>
            <h1>{diamondCounter} of {diamondMaxCount}</h1>
            <br />
            <button className='button' onClick={onResetClick}>RESET</button>
        </div>
    );
}

export default Result;