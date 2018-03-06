import React, { Component } from 'react'
import { Text, View } from 'react-native-animatable'
import { TextInput, Image, KeyboardAvoidingView } from 'react-native'
import axios from 'axios'
import { NavigationActions } from 'react-navigation'
import { styles } from '../styles/Signupstyles'
import { endpoint, isValidEmail } from '../utils/index'
import Button from 'apsl-react-native-button'
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
        };
    }
    validInput = (email, phoneNumber) =>{
        if(email.length==0){
            alert('Enter Email Address')
            return false
        }else if (!isValidEmail.test(email)){
            alert('Enter A Valid Email Address')
            return false
        }else if (phoneNumber.length ==0){
            alert('Enter Valid Phone Number')
            return false
        }else{
            return true
        }
     }


     proceed=(email, phoneNumber)=>{
        if(this.validInput(email, phoneNumber)){
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
                this.props.navigation.navigate('Confirmation', { res: res.data.jwt })
                this.setState({ show: false })
            })
            .catch((err) => {
                alert('Please Email and Phone Number Must be Unique')
                this.setState({ show: false })
            })
    }
    render() {
        const { show , phoneNumber, email} = this.state
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView
                    keyboardVerticalOffset={300}
                    style={styles.container}
                    behavior="padding"
                >

                    <View style={styles.image} animation={'bounceIn'} delay={800} duration={400}>
                        <Image source={require('../assets/images/logo.png')} />
                        <Text style={styles.headertext}>
                            {'Sign Up Form'}
                        </Text>
                    </View>
                    

                    <View style={styles.form} animation={'zoomIn'} delay={600} duration={400}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(email) => this.setState({ email:email })}
                            value={email}
                            placeholder={'JohnDoe@gmail.com'}
                            underlineColorAndroid={'transparent'}
                            placeholderTextColor={'rgba(255, 255,255,0.7)'}
                            animation={'fadeIn'}
                        />

                        <TextInput
                            style={styles.textInput}
                            onChangeText={(phoneNumber) => this.setState({ phoneNumber:phoneNumber })}
                            placeholder={'12345567890'}
                            placeholderTextColor={'rgba(255, 255,255,0.7)'}
                            value={phoneNumber}
                            underlineColorAndroid={'transparent'}
                            keyboardType={'numeric'}
                            animation={'fadeIn'}
                        />

                        <Button
                            isLoading={show}
                            style={styles.button} textStyle={styles.buttontext}
                            onPress={() => { this.proceed(email, phoneNumber) }}>
                            {'SIGN UP'}
                        </Button>
                    </View>

                    {/* save to phone storage so we can retrieve it here */}
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default Signup