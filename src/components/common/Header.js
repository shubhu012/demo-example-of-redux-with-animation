import React from 'react';
import { Text, View }from 'react-native';

const Header = (props) => {
    
    const { headerStyle, viewStyle } = styles;



    return(
        <View style={viewStyle} >
            <Text style={headerStyle} > { props.headerText } </Text>
        </View>
    );
};


const styles = {
    viewStyle:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 10
    },
    headerStyle: {
        fontSize: 20,
        color: '#000'
    },
};

export  { Header };  