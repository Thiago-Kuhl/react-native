import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Mega from './components/mega/Mega';
// import FlexBoxV4 from './components/layout/FlexBoxV4';
// import FlexBoxV3 from './components/layout/FlexBoxV3';
// import FlexBoxV2 from './components/layout/FlexBoxV2';
// import FlexBoxV1 from './components/layout/FlexBoxV1';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import UsuarioLogado from './components/UsuarioLogado';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import ParImpar from './components/ParImpar';
// import ContadorV2 from './components/contador/ContadorV2';
// import Diferenciar from './components/Diferenciar';
// import Pai from './components/indireta/Pai';
// import Filho from './components/indireta/Filho';
// import Pai from './components/direta/Pai';
// import Contador from './components/Contador';
// import Button from './components/Botao';
// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
// import Primeiro from './components/Primeiro';

export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdNumeros={12} />
        {/* <FlexBoxV4 /> */}
        {/* <FlexBoxV3 /> */}
        {/* <FlexBoxV2 /> */}
        {/* <FlexBoxV1 /> */}
        {/* <DigiteSeuNome /> */}
        {/* <ListaProdutosV2 /> */}
        {/* <ListaProdutos /> */}
        {/* <UsuarioLogado usuario={{nome: 'Thiago', email: 'thiago@kuhl.com'}} />
        <UsuarioLogado usuario={{nome: 'Thiago'}} />
        <UsuarioLogado usuario={{email: 'thiago@kuhl.com'}} /> */}
        {/* <Familia>
            <Membro nome="Carlos" sobrenome="Arruda" />
            <Membro nome="Bea" sobrenome="Arruda" />
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
        </Familia> */}
        {/* <ParImpar num={6} /> */}
        {/* <Diferenciar /> */}
        {/* <ContadorV2 /> */}
        {/* <Pai /> */}
        {/* <Filho /> */}
        {/* <Pai /> */}
        {/* <Contador inicial={100} />
        <Contador inicial={100} passo={100} /> */}
        {/* <Button /> */}
        {/* <Titulo
            principal="Cadastro Produto"
            secundario="Tela de Cadastro do Produto"
        /> */}
        {/* <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} /> */}
        {/* <MinMax min={3} max={30} />
        <MinMax min={1} max={10} /> */}
        {/* <CompPadrao /> */}
        {/* <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
);

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },
});
