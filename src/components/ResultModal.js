import React from 'react';
import Modal from 'react-modal';
import DiamondSweeperContext, { useDiamondSweeperContext } from '../context/diamondSweeperContext';

const ResultModal = () => {
    const { handleOptionModalClose, diamondCounter, diamondMaxCount, clickCount, rowCount, colCount } = useDiamondSweeperContext(DiamondSweeperContext);
    return (
        <Modal
            isOpen={diamondCounter === diamondMaxCount}
            contentLabel="Result"
            onRequestClose={handleOptionModalClose}
            closeTimeoutMS={200}
            className="modal"
        >
            <h1 className="modal__title">GAME OVER</h1>
            <h3 className="modal__title">Your score is</h3>
            {<h1 className="modal__body">{(rowCount * colCount) - clickCount}</h1>}
            <button className="button" onClick={handleOptionModalClose}>PLAY AGAIN</button>
        </Modal>
    )
};

export default ResultModal;