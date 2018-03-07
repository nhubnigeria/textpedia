import React, { Component } from 'react'
import { Image, AsyncStorage, KeyboardAvoidingView, Alert } from 'react-native'
import { View } from 'react-native-animatable'
import axios from 'axios'
import { endpoint } from '../utils/index'
import { styles } from '../styles/Confirmationstyles'
import { NavigationActions } from 'react-navigation'
import { CustomText, CustomButton, CustomTextInput } from '../components'

class Confirmation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: '',
            auth: false,
            show: false,
            jwt: this.props.navigation.state.params.res,
        }
    }

    validInput = (token) => {
        if (token.length == 0) {
            this.showAlert('Please Enter Token')
            return false
        } else if (token.length < 28) {
            showAlert('In Complete Token Entered')
            return false
        } else {
            return true
        }
    }

    showAlert = (message) => {
        let msg, txt, txt2
        const { jwt } = this.state
        if (message == 'Please Enter Token') {
            msg = 'Please Enter Token'
            txt = ''
            txt2 = 'OK'
        } else 

        if (message == 'In Complete Token Entered') {
            msg = 'In Complete Token Entered'
            txt = 'EXIT'
            txt2 = 'RETRY'
        } else 
        if (message == 'retry in 2 hours') {
            msg = 'Expired OTP, Please Retry In 2 Hours'
            txt = 'OK'
            txt2 = ''
        } else if (message == 'Invalid Token Entered') {
            msg = 'Invalid Token Entered'
            txt = 'EXIT'
            txt2 = 'RETRY'
        } else if (message == 'Your account has been verified!') {
            msg = 'Your account has been verified!'
            txt = 'OK'
            txt2 = ''
        } else {
            msg = 'Oops Something Went Wrong, Try Again Later'
            txt = 'EXIT'
            txt2 = ''
        }
        Alert.alert(
            'Message',msg,[
                { text: txt, onPress: () => { this.disabled() } },
                { text: txt2, onPress: () => { } }
            ],
            { cancelable: false }
        )
        this.saveJWT(jwt)

    }

    saveJWT = async (jwt) => {
        try {
            await AsyncStorage.setItem('jwt', jwt);
            this.setState({ 'jwt': jwt });
        } catch (error) {

        }
    }

    disabled = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Splash' })],
        });
        this.props.navigation.dispatch(resetAction);
    }


    deleteJWT = async (jwt) => {
        try {
            await AsyncStorage.removeItem(jwt);
            return true;
        }
        catch (exception) {
            return false;
        }
    }

    proceed = (token) => {

        if (this.validInput(token)) {
            this.submit(token)
        }
    }
    submit = (token) => {
        const jwt = this.props.navigation.state.params.res
        this.setState({ show: true, jwt: jwt })

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
                this.setState({ auth: true, show: false })
                this.deleteJWT(jwt)
                this.showAlert(res.data)
            })
            .catch((err) => {
                this.setState({ show: false })
                if (err.response.status === 403) {
                    err = 'Invalid Token Entered'
                }
                this.showAlert(err)
            })
    }
    render() {
        const { show, token } = this.state
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView
                    keyboardVerticalOffset={350}
                    style={styles.container}
                    behavior="padding"
                >
                    <View style={styles.image} animation={'bounceIn'} delay={800} duration={400}>
                        <Image source={require('../assets/images/logo.png')} />
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
                            onPress={() => { this.proceed(token) }}
                            label={'FINISH'} />

                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default Confirmation;