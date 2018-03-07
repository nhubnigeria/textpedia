import React, { Component } from 'react'
import Dimensions from 'Dimensions'
import { TextInput, View, Image } from 'react-native'


export default class CustomTextInput extends Component {
    render() {
        const { style, onChangeText, value, placeholder, placeholderTextColor, maxLenth, returnKeyType, keyboardType, maxLength, animation } = this.props
        return (
            <View>
                <TextInput
                    style={style}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    returnKeyType={returnKeyType}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    underlineColorAndroid={'transparent'}
                    animation={animation}
                />
            </View>
        )
    }
}



