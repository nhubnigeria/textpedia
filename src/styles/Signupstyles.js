import { Platform } from 'react-native';
import Dimensions from 'Dimensions';
import {Metrics}from '../utils/Metrics'


export const styles = {

    container: {
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    
    },

    form: {
        marginTop:Metrics.formMarginTop,
        backgroundColor: '#841584',
        height:Metrics.formHeight,
        paddingBottom: 20,
        paddingRight:20,
        paddingLeft:20,

    },

    textInput: {
        borderRadius: 4,
        fontFamily:'regular',
        fontSize: 16,
        height: 50,
        borderColor:'gray',
        borderWidth: 0,
        backgroundColor: '#ccc',
        margin: 20,
        padding: 15,
        color:'#841584'
    },

    phoneInput: {
        fontFamily:'regular',
        fontSize: 16,
        height: 50,
        borderColor:'gray',
        borderWidth: 0,
        backgroundColor: '#ccc',
        color:'#841584',
        //padding: 15,
    },


    Input: {
        borderRadius: 4,
        height: 50,
        borderColor:'gray',
        borderWidth: 0,
        backgroundColor: '#ccc',
        margin:20,
        padding: 15,
    },

    button: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 15,
        height: 50,
        margin: 20,
        elevation: 4,
    },

    buttontext: {
        color: '#841584',
        fontFamily: 'bold'
    },

    image: {
        paddingTop:95,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:Metrics.imageMargin,
    },

    imageSize:{
        width: Metrics.imageSize,
        height:Metrics.imageSize
    },

    headertext:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:Metrics.headerText,
        color:'#841584',
        fontFamily:'bold',
    },


}