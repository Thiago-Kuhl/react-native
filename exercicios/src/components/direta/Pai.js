import React from 'react';
import Filho from '../direta/Filho';

// import { Container } from './styles';

export default (props) => {
    let x = 13;
    let y = 100;
    return (
        <>
            <Filho a={x} b={y} />
            <Filho a={x + 100} b={y + 200} />
        </>
    );
};
