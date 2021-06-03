import React from 'react';
import './NumberPanel.scss';
import Button from '../Button/Button';

const buttons = [
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn',
        name: 'cleaning',
        char: 'C',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn',
        name: 'division',
        char: '/',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn',
        name: 'multiplication',
        char: '*',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn',
        name: 'undo',
        char: '<x=',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn btn--number',
        name: 'number',
        char: '7',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn btn--number',
        name: 'number',
        char: '8',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn btn--number',
        name: 'number',
        char: '9',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn',
        name: 'subtraction',
        char: '-',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn btn--number',
        name: 'number',
        char: '4',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn btn--number',
        name: 'number',
        char: '5',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn btn--number',
        name: 'number',
        char: '6',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn',
        name: 'addition',
        char: '+',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn btn--number',
        name: 'number',
        char: '1',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn btn--number',
        name: 'number',
        char: '2',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn btn--number',
        name: 'number',
        char: '3',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn btn--result',
        name: 'result',
        char: '=',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn',
        name: 'modulo',
        char: '%',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn btn--number',
        name: 'number',
        char: '0',
    },
    {
        id: Math.floor(Math.random() * 10000),
        className: 'btn',
        name: 'dot',
        char: '.',
    },
];

const NumberPanel = () => {

    const buttonsMap = buttons.map(item => (
        <Button key={item.id} {...item} />
    ))

    return (
        <div className="panel">
            {buttonsMap}
        </div>
    );
}

export default NumberPanel;