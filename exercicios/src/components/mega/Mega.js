import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Estilo from '../estilo';
import Numero from './Numero';

export default class Mega extends Component {
    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: [],
    };

    alterarQtdeNumero = (qtde) => {
        this.setState({qtdNumeros: +qtde});
    };

    gerarNumeroNaoContido = (nums) => {
        const novo = parseInt(Math.random() * 60) + 1;
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
    };

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce((n) => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b);
        this.setState({numeros});
    };

    exibirNumeros = () => {
        const nums = this.state.numeros;
        return nums.map((num) => {
            return <Numero key={num} num={num} />;
        });
    };
    render() {
        return (
            <>
                <Text style={Estilo.txtG}>Gerador de Mega-Sena</Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Quantidade de Números"
                    value={`${this.state.qtdNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button title="Gerar" onPress={this.gerarNumeros} />
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                    {this.exibirNumeros()}
                </View>
            </>
        );
    }
}
