import React, { Component } from 'react'
import { Image, AsyncStorage, KeyboardAvoidingView } from 'react-native'
import { View } from 'react-native-animatable'
import axios from 'axios'
import { endpoint } from '../utils/index'
import { styles } from '../styles/Confirmationstyles'
import { CustomText, CustomButton, CustomTextInput } from '../components'

class Confirmation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: '',
            auth: false,
            error: '',
            show: false,
            jwt: this.props.navigation.state.params.res,
        }
    }

    validInput = (token) => {
        if (token.length == 0) {
            alert('Please Enter Token')
            return false
        } else if (token.length < 28) {
            alert('In Complete Token Entered')
            return false
        } else {
            return true
        }
    }

    showAlert = (message) => {
        const { jwt } = this.state
        if (message == 'retry in 2 hours') {
            alert('Expired OTP, Please Retry In 2 Hours')
        } else {
            alert('Oops Something Went Wrong, Try Again Later')

        }
        this.saveJWT(jwt)
    }

    saveJWT = async (jwt) => {
        try {
            await AsyncStorage.setItem('jwt', jwt);
            this.setState({ 'jwt': jwt });
        } catch (error) {
            console.log('Yesss ', error)
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
                alert('Registration Completed')
            })
            .catch((err) => {
                this.setState({ error: err, show: false })
                let message = err.response.data
                this.showAlert(message)
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