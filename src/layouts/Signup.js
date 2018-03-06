import React, { Component } from 'react'
import { View } from 'react-native-animatable'
import { Image, KeyboardAvoidingView, AsyncStorage } from 'react-native'
import axios from 'axios'
import { NavigationActions } from 'react-navigation'
import { styles } from '../styles/Signupstyles'
import { endpoint, isValidEmail } from '../utils/index'
import { CustomButton, CustomTextInput, CustomText } from '../components'
import { clearStore, getToken, finishRegidtration } from '../utils'
//import PhoneInput from 'react-native-phone-input';
//import CountryPicker from 'react-native-country-picker-modal';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jwt: undefined,
            email: '',
            phoneNumber: '',
            show: false,
            loaded: false,
        };
    }

    componentWillMount() {
        this.readJWT()
    }

    readJWT = async () => {
        try {
            this.setState({ loaded: true })

            const value = await AsyncStorage.getItem('jwt');
            if (value !== null) {
                this.setState({ show: false })

                this.props.navigation.navigate('Confirmation', { res: value })
            }
        } catch (error) {
            this.setState({ loaded: false })
        }
    }

    validInput = (email, phoneNumber) => {
        if (email.length == 0) {
            alert('Enter Email Address')
            return false
        } else if (!isValidEmail.test(email)) {
            alert('Enter A Valid Email Address')
            return false
        } else if (phoneNumber.length == 0) {
            alert('Enter Valid Phone Number')
            return false
        } else {
            return true
        }
    }

    proceed = (email, phoneNumber) => {
        if (this.validInput(email, phoneNumber)) {
            this.submit(email, phoneNumber)
        }
    }
    submit = (email, phoneNumber) => {

        this.setState({ show: true })
        let data = JSON.stringify({
            data: {
                phoneNumber,
                email
            }
        })

        axios.post(endpoint + 'submit', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                this.setState({ show: false })
                this.props.navigation.navigate('Confirmation', { res: res.data.jwt })
            })
            .catch((err) => {
                alert('Please Email and Phone Number Must be Unique')
                this.setState({ show: false })
            })
    }
    render() {
        const { show, phoneNumber, email, loaded } = this.state
        return (
            <View style={styles.container}>
                {loaded ?
                    <KeyboardAvoidingView
                        keyboardVerticalOffset={300}
                        style={styles.container}
                        behavior="padding" >

                        <View style={styles.image} animation={'bounceIn'} delay={800} duration={400}>
                            <Image source={require('../assets/images/logo.png')} />
                            <CustomText style={styles.headertext}
                                content={'Sign Up Form'} />

                        </View>


                        <View style={styles.form} animation={'zoomIn'} delay={600} duration={400}>
                            <CustomTextInput
                                style={styles.textInput}
                                onChangeText={(email) => this.setState({ email: email })}
                                value={email}
                                placeholder={'JohnDoe@gmail.com'}
                                underlineColorAndroid={'transparent'}
                                placeholderTextColor={'rgba(255, 255,255,0.7)'}
                                keyboardType={'email-address'}
                                animation={'fadeIn'}
                            />

                            <CustomTextInput
                                style={styles.textInput}
                                onChangeText={(phoneNumber) => this.setState({ phoneNumber: phoneNumber })}
                                placeholder={'12345567890'}
                                placeholderTextColor={'rgba(255, 255,255,0.7)'}
                                value={phoneNumber}
                                underlineColorAndroid={'transparent'}
                                keyboardType={'numeric'}
                                animation={'fadeIn'}
                            />

                            <CustomButton
                                isLoading={show}
                                style={styles.button} textStyle={styles.buttontext}
                                onPress={() => { this.proceed(email, phoneNumber) }}
                                label={'SIGN UP'} />

                        </View>
                    </KeyboardAvoidingView>
                    :
                    null}
            </View>
        )
    }
}

export default Signup