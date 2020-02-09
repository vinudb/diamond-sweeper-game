import React, {useContext} from 'react';

const DiamondSweeperContext = React.createContext();

export default DiamondSweeperContext;
export const useDiamondSweeperContext = () => useContext(DiamondSweeperContext);