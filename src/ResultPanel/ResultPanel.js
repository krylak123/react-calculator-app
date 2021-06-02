import React, { useContext } from 'react';
import './ResultPanel.scss';
import { AppContext } from '../.store/AppProvider';

const ResultPanel = () => {

    const { result } = useContext(AppContext);

    console.log(result);

    return (
        <div className="result">
            <span className="result__span">{result}</span>
        </div>
    );
}

export default ResultPanel;