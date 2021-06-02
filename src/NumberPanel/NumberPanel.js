import React from 'react';
import './NumberPanel.scss';
import Button from '../Button/Button';
import { uuid } from 'uuidv4';

const buttons = [
    {
        id: uuid(),
        className: 'btn',
        name: 'cleaning',
        char: 'C',
    },
    {
        id: uuid(),
        className: 'btn',
        name: 'division',
        char: '/',
    },
    {
        id: uuid(),
        className: 'btn',
        name: 'multiplication',
        char: '*',
    },
    {
        id: uuid(),
        className: 'btn',
        name: 'undo',
        char: '<x=',
    },
    {
        id: uuid(),
        className: 'btn btn--number',
        name: 'number',
        char: '7',
    },
    {
        id: uuid(),
        className: 'btn btn--number',
        name: 'number',
        char: '8',
    },
    {
        id: uuid(),
        className: 'btn btn--number',
        name: 'number',
        char: '9',
    },
    {
        id: uuid(),
        className: 'btn',
        name: 'subtraction',
        char: '-',
    },
    {
        id: uuid(),
        className: 'btn btn--number',
        name: 'number',
        char: '4',
    },
    {
        id: uuid(),
        className: 'btn btn--number',
        name: 'number',
        char: '5',
    },
    {
        id: uuid(),
        className: 'btn btn--number',
        name: 'number',
        char: '6',
    },
    {
        id: uuid(),
        className: 'btn',
        name: 'addition',
        char: '+',
    },
    {
        id: uuid(),
        className: 'btn btn--number',
        name: 'number',
        char: '1',
    },
    {
        id: uuid(),
        className: 'btn btn--number',
        name: 'number',
        char: '2',
    },
    {
        id: uuid(),
        className: 'btn btn--number',
        name: 'number',
        char: '3',
    },
    {
        id: uuid(),
        className: 'btn btn--result',
        name: 'result',
        char: '=',
    },
    {
        id: uuid(),
        className: 'btn',
        name: 'modulo',
        char: '%',
    },
    {
        id: uuid(),
        className: 'btn btn--number',
        name: 'number',
        char: '0',
    },
    {
        id: uuid(),
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