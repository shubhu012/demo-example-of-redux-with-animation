import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ lable, value, onChangeText, placeholder, secureTextEntry }) => {

    const { inputStyle, lableStyle, containerStyle } = styles;

   return(
    <View style={containerStyle} >
        <Text>{ lable }</Text>
        <TextInput
        secureTextEntry={secureTextEntry}
        keyboardType="email-address"
        placeholder={ placeholder }
        autoCorrect={false}
        style={inputStyle}
        value={ value }
        onChangeText={ onChangeText }
        />
    </View>
   );
};

const styles = {
    inputStyle:{
        color: '#000',
        paddingRight: 50,
        paddingLeft: 50,
        fontSize: 18,
        lineHeight: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
};

export { Input };