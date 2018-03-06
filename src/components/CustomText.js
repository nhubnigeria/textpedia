import React, { Component } from 'react'
import Dimensions from 'Dimensions'
import { Text, View } from 'react-native-animatable'


export default class CustomText extends Component {
    render() {
        const { style, content } = this.props
        return (
            <View>
                <Text style={style}>
                    {content}
                </Text>
            </View>
        )
    }
}




