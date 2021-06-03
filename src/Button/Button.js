import React, { useContext } from 'react';
import { AppContext } from '../.store/AppProvider';

import './Button.scss';

const Button = ({ char, className, name }) => {

    const { result, setResult, isOperend, setIsOperend } = useContext(AppContext)

    const handleCalculator = () => {
        if (name === "number") {
            setResult(prevValue => prevValue + char)
        } else if (name === "dot") {
            setResult(prevValue => prevValue + char)
        } else {
            if (!isOperend) {
                setResult(prevValue => prevValue + char)
                setIsOperend(prevValue => !prevValue)
            } else {
                showResult()
            }
        }
    }

    const showResult = () => {
        let temp = '';

        try {
            // eslint-disable-next-line
            temp = eval(result)

            if (temp % 1 === 0) {
                setResult(temp)
            } else {
                setResult(temp.toFixed(2))
            }
            setIsOperend(prevValue => !prevValue)
        } catch {
            setResult('error')
        }
    }

    const handleOnClick = () => {
        if (name === "result") {
            showResult()

        } else if (name === "cleaning") {
            setResult('')

        } else if (name === "undo") {
            setResult(prevValue => prevValue.slice(0, -1))

        } else {
            handleCalculator();
        }
    }

    return (
        <button onClick={handleOnClick} className={className}>{char}</button>
    );
}

export default Button;