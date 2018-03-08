
import  {normalize} from '../utils/NormalizeSize'


export const styles = {

    container: {
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    
    },

    form: {
        marginTop:normalize(250),
        backgroundColor: '#841584',
        height:normalize(450),
        paddingBottom:normalize(20),
        paddingRight:normalize(20),
        paddingLeft:normalize(20),

    },

    textInput: {
        borderRadius: 4,
        fontFamily:'regular',
        fontSize:normalize(16),
        height:normalize(50),
        borderColor:'gray',
        borderWidth: 0,
        backgroundColor: '#ccc',
        margin:normalize(20),
        padding:normalize(15),
        color:'#841584'
    },

    phoneInput: {
        fontFamily:'regular',
        fontSize:normalize(16),
        height:normalize(50),
        borderColor:'gray',
        borderWidth: 0,
        backgroundColor: '#ccc',
        color:'#841584',
    },

    Input: {
        borderRadius: 4,
        height:normalize(50),
        borderColor:'gray',
        borderWidth: 0,
        backgroundColor: '#ccc',
        margin:normalize(20),
        padding:normalize(15),
    },

    button: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding:normalize(15),
        height:normalize(50),
        margin:normalize(20),
        elevation:normalize(4),
    },

    buttontext: {
        color: '#841584',
        fontFamily: 'bold'
    },

    image: {
        paddingTop:normalize(95),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:normalize(350)
    },

    imageSize:{
        width:normalize(85),
        height:normalize(85)
    },

    headertext:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:normalize(26),
        color:'#841584',
        fontFamily:'bold',
    },


}