import React,{ Component } from 'react';
import { Text, TouchableWithoutFeedback, View, NativeModules, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as action from '../action';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
   
    componentWillUpdate(){
        LayoutAnimation.linear();
    }

    Description(){

        const { library, expand } = this.props;

        if( expand ){
            return (
                    <CardSection>
                        <Text style={{ flex:1 }} > { library.description } </Text>
                    </CardSection>
            );
        }
    }

    render() {
        
        const {textStyle}=styles;
        const { id } = this.props.library;

        return (
            <TouchableWithoutFeedback
            onPress={()=> this.props.selectLibrary(id) }
            >
                <View>
                    <CardSection>
                        <Text style={textStyle}>
                        {this.props.library.title} 
                        </Text>
                    </CardSection>
                    { this.Description() }
                </View>
            </TouchableWithoutFeedback>
        ); 
    }
}

const styles ={
    textStyle:{
        fontSize: 20,
    },
};

const mapStateToProps = (state, ownProps) => {

    const expand = state.SelectedLibraryID === ownProps.library.id;

    return { expand } ;
};

export default connect(mapStateToProps, action) (ListItem);