import React from 'react';
import { buildCells, buildDiamonds, isDiamondPresent, getHint } from '../utils';
import DiamondSweeperContainer from './DiamondSweeperContainer';
import DiamondSweeperContext from "../context/diamondSweeperContext";
import Result from './Result';
import ResultModal from './ResultModal';

class DiamondSweeperApp extends React.Component {
    constructor() {
        super();
        this.state = {
            diamondCells: [],
            baseCells: [],
            diamondMaxCount: 8,
            rowCount: 8,
            colCount: 8 
        }
    }

    initializeGame = ()=>{
        this.setState({
            diamondCounter: 0,
            score: 0,
            arrowCell: [],
            baseCells: buildCells(this.state.rowCount, this.state.colCount),
            diamondCells: buildDiamonds(this.state.diamondMaxCount, (this.state.rowCount * this.state.colCount))
        }, ()=> this.setState({clickCount: 0}));
    }

    componentDidMount = ()=> this.initializeGame();

    handleOptionModalClose = () => this.initializeGame();

    onResetClick = () => this.initializeGame();

    onCellClick = (cellIndex, cellNum) => {
        //If click is not on unknown cell then return
        if(this.state.baseCells[cellIndex[0]][cellIndex[1]].applyClass !== 'unknown') return;
        //is diamond present in the clicked cell
        let isPresent = isDiamondPresent(cellNum, this.state.diamondCells);
        let baseCells = this.state.baseCells;
        if (isPresent) {
            //modify the cell in baseCells with diamond class and updated counters state 
            baseCells[cellIndex[0]][cellIndex[1]] = { ...baseCells[cellIndex[0]][cellIndex[1]], applyClass: 'diamond' }
            this.setState({
                clickCount: this.state.clickCount + 1,
                diamondCounter: this.state.diamondCounter + 1,
                baseCells
            })
        } else {
            //get neighbouring cells of the clicked cell which has diamond hidden
            let hintArray = getHint(this.state.diamondCells, this.state.baseCells, cellIndex);
            if (this.state.arrowCell.length > 0) {
                //If there was an arrow shown before, then hide arrow and apply class blank
                baseCells[this.state.arrowCell[0]][this.state.arrowCell[1]] = {
                    ...baseCells[this.state.arrowCell[0]][this.state.arrowCell[1]], applyClass: 'blank'
                }
            }
            if (hintArray.length === 0) {
                //if no diamond in the neighbour, update the cell class as blank in baseCells
                baseCells[cellIndex[0]][cellIndex[1]] = { ...baseCells[cellIndex[0]][cellIndex[1]], applyClass: 'blank' }
                this.setState({
                    clickCount: this.state.clickCount + 1,
                    baseCells,
                    arrowCell: []
                })
            } else {
                let hint = hintArray[0];
                let applyClass = hint.direction;
                //If the diamond in the hint was already revealed, then apply class blank
                if(baseCells[hint.points[0]][hint.points[1]].applyClass === 'diamond'){
                    applyClass = 'blank'
                };
                //update the clicked cell in baseCells with arrow class with direction received in hint
                baseCells[cellIndex[0]][cellIndex[1]] = { ...baseCells[cellIndex[0]][cellIndex[1]], applyClass }
                this.setState({
                    clickCount: this.state.clickCount + 1,
                    baseCells,
                    arrowCell: [cellIndex[0], cellIndex[1]]
                })
            }
        }
    }

    render() {
        const { clickCount, baseCells, clickedCellClass, diamondCounter, diamondMaxCount, rowCount, colCount } = this.state;
        const contextValues = {
            clickCount,
            baseCells,
            clickedCellClass,
            diamondCounter,
            diamondMaxCount,
            rowCount, 
            colCount,
            onCellClick: this.onCellClick,
            handleOptionModalClose: this.handleOptionModalClose,
            onResetClick: this.onResetClick
        };
        return (
            <DiamondSweeperContext.Provider value={contextValues}>
                <div className='gameContainer'>
                    <DiamondSweeperContainer />
                    <Result />
                </div>
                <ResultModal />
            </DiamondSweeperContext.Provider>
        );
    }
}

export default DiamondSweeperApp;