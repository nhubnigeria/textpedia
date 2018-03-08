import  {normalize} from '../utils/NormalizeSize'

export const styles = {
     wrapper:{
        
     },
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        padding:normalize(20),
        
    },

    text: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: normalize(5),
        lineHeight:normalize(35),
        padding:normalize(5),
        fontSize:normalize(16),
        marginLeft:normalize(25),
        marginRight:normalize(25),
        fontFamily: 'regular',

    },

    headerText: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:normalize(5),
        padding:0,
        fontSize:normalize(20),
        color: '#841584',
        fontFamily: 'bold',
    },


    cardHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:normalize(12.5),
        padding:normalize(15),
        fontSize:normalize(26),
        color: 'white',
        fontFamily: 'bold',
    },

    button: {
        backgroundColor: 'transparent',
        marginTop:normalize(55),
        padding:normalize(15),
        alignItems: 'center',
        justifyContent: 'center',
    },

    dot: {
        backgroundColor:'#841584',
        width:normalize(13),
        height:normalize(13),
        borderRadius:normalize(7),
        marginLeft:normalize(7),
        marginRight:normalize(7)
    },

    dotStyle: {
        marginTop:normalize(54),
        //marginBottom:normalize(44)
    },

    active: {
        backgroundColor: '#fff',
        width: normalize(13),
        height:normalize(13),
        borderRadius:normalize(7),
        marginLeft:normalize(7),
        marginRight:normalize(7)
    },

    card: {
        card: {
            marginBottom:normalize(100), marginTop:normalize(12.5)}
    },

    cardTitle: {
        cardTitle: { backgroundColor: '#841584', 
                    padding:normalize(4), justifyContent: 'center',
                     height:normalize(70)}

    },

    cardContent: {
        content: { 
                    padding:normalize(4), justifyContent: 'center',
                     alignItems:'center'}

    },

    button: {
        backgroundColor: '#841584',
        padding:normalize(15),
        height:normalize(50),
        marginBottom:normalize(20),
    },

    buttontext: {
        color: 'white',
        fontFamily: 'bold'
    },

    headerLabel: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:normalize(55),
    },


}