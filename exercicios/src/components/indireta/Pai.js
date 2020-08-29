import React, {useState} from 'react';
import Filho from '../indireta/Filho';
import {Text} from 'react-native';
import Estilo from '../estilo';

export default (props) => {
    const [textoInicio, setTexto] = useState('');
    const [num, setNum] = useState(0);
    function exibirValor(numero, texto) {
        setNum(numero);
        setTexto(texto);
    }
    return (
        <>
            <Text style={Estilo.txtG}>
                {textoInicio} {num}
            </Text>
            <Filho min={1} max={60} funcao={exibirValor} />
        </>
    );
};
