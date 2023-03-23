import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function REVIEW ({navigation}){
    const onpressHandlar = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.titletext}>{navigation.getParam('body')}</Text>
                <Text style={styles.titletext}>Number:{navigation.getParam('key')}</Text>
            </View>
            <Text style={styles.item}>{navigation.getParam('title')}</Text>
            <View >
                <TouchableOpacity style={{ backgroundColor:"#87A2FB", padding:10,borderRadius: 20 }} onPress={onpressHandlar}>
                <Text style={{textAlign:"center", fontFamily: 'Nunito-Medium', fontSize: 18,}}>Go Back Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textView:{
        marginLeft: 10,
    },
    titletext: {
        fontFamily: 'Nunito-Black',
        fontSize: 18,
        color: '#8BBCCC',
        textAlign: "left",
    }, 
    buttonStyle: {
        textAlign: "right",
    }, 
    item:{
        justifyContent: 'center',
        textAlign: 'justify',
        padding: 5
    },


});