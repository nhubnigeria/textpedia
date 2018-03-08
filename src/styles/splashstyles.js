import {Metrics}from '../utils/Metrics'

export const styles = {
     wrapper:{
        
     },
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        padding:Metrics.splashContainerPadding,
        
    },

    text: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        lineHeight: 35,
        padding: 5,
        fontSize: 18,
        marginLeft: 25,
        marginRight: 25,
        fontFamily: 'regular',

    },

    headerText: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Metrics.textMargin,
        padding:0,
        fontSize:Metrics.headerFontSize,
        color: '#841584',
        fontFamily: 'bold',
    },


    cardHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Metrics.cardMarginTop,
        padding: 15,
        fontSize: 26,
        color: 'white',
        fontFamily: 'bold',
    },

    button: {
        backgroundColor: 'transparent',
        marginTop: 55,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    dot: {
        backgroundColor:
            'rgba(255,255,255,.3)',
        width: 13,
        height: 13,
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 7
    },

    dotStyle: {
        marginTop:54,
        marginBottom:44
    },

    active: {
        backgroundColor: '#fff',
        width: 13,
        height: 13,
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 7
    },

    card: {
        card: { width:Metrics.layoutWidth, height:Metrics.layoutHeight, 
            marginBottom:Metrics.cardMarginBottom,
             marginTop: Metrics.cardMarginTop}
    },

    cardTitle: {
        cardTitle: { backgroundColor: '#841584', 
                    padding:Metrics.cardTitlePadding, justifyContent: 'center',
                     height:Metrics.cardTitle }

    },

    button: {
        borderColor: '#8e44ad',
        backgroundColor: '#841584',
        borderRadius: 4,
        padding: 15,
        height: 50,
        marginBottom: 20,
    },

    buttontext: {
        color: 'white',
        fontFamily: 'bold'
    },

    headerLabel: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:Metrics.headerLabelMargin,
    },


    box: {
        width: 300,
        height: 450,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 2
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    },


}