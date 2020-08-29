import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import Estilo from './estilo';

export default ({inicial = 0, passo = 1}) => {
    // let numero = props.inicial;
    const [numero, setNumero] = useState(inicial);

    const inc = () => setNumero(numero + 1 + passo);
    const dec = () => setNumero(numero - 1 - passo);
    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </>
    );
};
