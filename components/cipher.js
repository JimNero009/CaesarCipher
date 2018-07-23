import React, { Component } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

class Cipher extends Component {
    constructor(props) {
        super(props);
        this.state = { inputText: "Don't tell anyone, but Jim is awesome!", outputText: null }
    }

    handleInputTextChange = (text) => {
        this.state.inputText = text;
        console.log(this.state.inputText);
    }

    properModulo = (num, mod) => {
        return (num % mod + mod) % mod;
    }

    applyCipher = () => {
        garbledOutput = "";
        for (var index = 0; index < this.state.inputText.length; index++) {
            var charcode = this.state.inputText.charCodeAt(index);
            if (charcode >= 97 && charcode <= 122) {
                newCharcode = this.properModulo(charcode - 97 - 3, 26) + 97;
                garbledOutput += String.fromCharCode(newCharcode);
            } else if (charcode >= 65 && charcode <= 90) {
                newCharcode = this.properModulo(charcode - 65 - 3, 26) + 65;
                garbledOutput += String.fromCharCode(newCharcode);
            } else {
                garbledOutput += String.fromCharCode(charcode);
            }
        }
        this.setState({
            outputText: garbledOutput
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text h1>Caesar Cipher!{"\n"}</Text>
                <TextInput value={this.state.inputText} onChangeText={this.handleInputTextChange} style={styles.textBox} onSubmitEditing={this.applyCipher}/>
                <Button onPress={this.applyCipher} title="Make me super secret!"/>
                <Text>{this.state.outputText}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBox: {
        width: '75%',
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
    }
});

export default Cipher