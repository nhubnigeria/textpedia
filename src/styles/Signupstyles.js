import Dimensions from 'Dimensions';
 const myHeight = Dimensions.get('window').height;
 const myWidth = Dimensions.get('window').width;

export const styles = {

    container: {

        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: myHeight * 0.05,


    },

    form: {
        //200
        marginTop: 150,
        backgroundColor: '#841584',
        height: 350,
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


    Input: {
        borderRadius: 4,
        height: 50,
        borderColor:'gray',
        borderWidth: 0,
        backgroundColor: '#ccc',
        margin: 20,
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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 355
    },

    headertext:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:15,
        lineHeight:35,
        padding:15,
        fontSize:26,
        color:'#841584',
        fontFamily:'bold',
    },

}