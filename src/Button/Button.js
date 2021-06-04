import React, { useContext } from 'react';
import { AppContext } from '../.store/AppProvider';

import './Button.scss';

const Button = ({ char, className, name }) => {

    const { result, setResult, isOperend, setIsOperend, setResultList } = useContext(AppContext)

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
        let tempResult = result;

        try {
            // eslint-disable-next-line
            temp = eval(result)

            if (temp % 1 === 0) {
                setResult(temp)
            } else {
                temp = temp.toFixed(2)
                setResult(temp)
            }

            setResultList(prevValue => [...prevValue, { operation: tempResult, result: String(temp) }])
            setIsOperend(prevValue => !prevValue)
        } catch {
            setResult('error')
            setTimeout(() => setResult(''), 1000)
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