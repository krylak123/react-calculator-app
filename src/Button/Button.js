import React from 'react';

import './Button.scss';

const Button = ({ char, className, name }) => {
    return (
        <button className={className}>{char}</button>
    );
}

export default Button;