import React from 'react';

import ResultPanel from '../ResultPanel/ResultPanel';
import NumberPanel from '../NumberPanel/NumberPanel';

import './Calculator.scss';

const Calculator = () => {
    return (
        <section className="calculator">
            <ResultPanel />
            <NumberPanel />
        </section>
    );
}

export default Calculator;