import React from 'react';
import {Text} from 'react-native';
7;
import Estilo from './estilo';

export default (props) => (
    <>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>
);
