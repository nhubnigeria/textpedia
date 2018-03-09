import React, { Component } from 'react'
import { Image, KeyboardAvoidingView, Alert } from 'react-native'
import { View } from 'react-native-animatable'
import axios from 'axios'
import { endpoint, offset, saveToken, deleteToken } from '../utils'
import { styles } from '../styles/Confirmationstyles'
import { NavigationActions } from 'react-navigation'
import { CustomText, CustomButton, CustomTextInput } from '../components'

class Confirmation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: '',
            show: false,
            message:'',
            jwt: this.props.navigation.state.params.res,
        }
    }

    validInput = () => {
        const{token}= this.state
        if(token.length == 0){
            this.showAlert('Please Enter Token')
        } else{
            this.submit()
        }  
    } 

    showAlert = (message) => {
        let msg, btn1, btn2
        const { jwt } = this.state
        switch (message) {
            case 'Please Enter Token':
                msg = 'Please Enter Token'
                btn1 = 'Exit'
                btn2 = 'OK'
                break;

            case 'retry in 2 hours':
                msg = 'Expired OTP, Please Retry In 2 Hours'
                btn1 = 'OK'
                btn2 = ''
                break;
            case 'Your account has been verified!':
                msg = 'Your account has been verified!'
                btn1 = 'OK'
                btn2 = ''
                break;
                default:
                msg = message
                btn1 = 'EXIT'
                btn2 = ''
        }

        Alert.alert(
            'Message', msg, [
                { text: btn1, onPress: () => this.disabled()},
                { text: btn2 }
            ],
            { cancelable: false }
        )
        saveToken(jwt)

    }


    disabled = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Splash' })],
        });
        this.props.navigation.dispatch(resetAction);
    }
 
    
    submit = () => {
        const {jwt, token} = this.state
        this.setState({ show: true})

        let data = JSON.stringify({
            data: {
                token,
                jwt
            }
        })

        axios.post(endpoint + 'confirm', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                this.setState({ show: false, message:res.data })
                deleteToken(jwt)
            })
            .catch((err) => {
                this.setState({ show: false , message:err.response.data}) 
            })
    }
    render() {
        const { show, token, message } = this.state
        ((message)?this.showAlert(message):null)
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView
                    keyboardVerticalOffset={offset}
                    style={styles.container}
                    behavior="padding"
                >
                    <View style={styles.image} animation={'bounceIn'} delay={800} duration={400}>
                        <Image source={require('../assets/images/logo.png')} style={styles.imageSize} />
                        <CustomText style={styles.headertext}
                            content={'Enter the Token Sent to Your Mail'} />

                    </View>
                    <View style={styles.form} animation={'zoomIn'} delay={600} duration={400}>

                        <CustomTextInput
                            style={styles.textInput}
                            onChangeText={(token) => { this.setState({ token: token }) }}
                            value={token}
                            underlineColorAndroid={'transparent'}
                            placeholder={'abcfddd12345567890'}
                            placeholderTextColor={'rgba(255, 255,255,0.7)'}
                            maxLength={28}
                        />
                        <CustomButton
                            isLoading={show}
                            style={styles.button} textStyle={styles.buttontext}
                            onPress={() => this.validInput()}
                            label={'FINISH'} />

                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default Confirmation;