import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Quadrado from './Quadrado';

export default (props) => {
    return (
        <>
            <SafeAreaView style={style.FlexV3}>
                <Quadrado cor="#ff801a" lado={30} />
                <Quadrado cor="#50d1f6" lado={40} />
                <Quadrado cor="#dd22c1" lado={50} />
                <Quadrado cor="#8312ed" lado={60} />
                <Quadrado cor="#36c9a7" lado={70} />
            </SafeAreaView>
        </>
    );
};

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        height: 350,
        width: '100%',
        backgroundColor: '#000',
    },
});
