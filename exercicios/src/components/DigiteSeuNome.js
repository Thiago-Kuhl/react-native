import React, {useState} from 'react';
import {Text, SafeAreaView, TextInput} from 'react-native';

export default (props) => {
    let [nome, setNome] = useState('');
    return (
        <>
            <SafeAreaView>
                <Text>{nome}</Text>
                <TextInput
                    placeholder="Digite seu Nome"
                    value={nome}
                    onChangeText={(name) => setNome(name)}
                />
            </SafeAreaView>
        </>
    );
};
