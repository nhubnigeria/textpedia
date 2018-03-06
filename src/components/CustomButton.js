import React, { Component } from 'react';
import Button from 'apsl-react-native-button'


class CustomButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {

           const{style, textStyle, onPress ,  isLoading, label} = this.props
        return (
            <Button
                isLoading={isLoading}
                style={style} 
                textStyle={textStyle}
                onPress={onPress}>
                {label}
            </Button>
        );
    }
}
export default CustomButton;