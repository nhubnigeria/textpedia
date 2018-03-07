import React, { Component } from 'react'
import { View } from 'react-native-animatable'
import { Image, KeyboardAvoidingView, AsyncStorage } from 'react-native'
import axios from 'axios'
import { NavigationActions } from 'react-navigation'
import { styles } from '../styles/Signupstyles'
import { endpoint, isValidEmail } from '../utils/index'
import { CustomButton, CustomTextInput, CustomText } from '../components'
import { clearStore, getToken, finishRegidtration } from '../utils'
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jwt: undefined,
            email: '',
            phoneNumber: '',
            show: false,
            loaded: false,
            cca2: 'US',
        };

        this.onPressFlag = this.onPressFlag.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
    }

    componentWillMount() {
        this.readJWT()
    }

    componentDidMount() {
        this.setState({
            pickerData: this.refs.phone.getPickerData()
        });
    }

    disabled = (jwt) => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Confirmation', params: { res: jwt }, })],

        });
        this.props.navigation.dispatch(resetAction);
    }


    

    onPressFlag() {
        this.refs.countryPicker.openModal()
    }

    selectCountry(country) {
        this.refs.phone.selectCountry(country.cca2.toLowerCase());
        this.setState({ cca2: country.cca2 });
    }

    readJWT = async () => {
        try {
            this.setState({ loaded: true })

            const value = await AsyncStorage.getItem('jwt');
            if (value !== null) {
                this.setState({ show: false })
                this.disabled(value)
            }
        } catch (error) {
            this.setState({ loaded: false })
        }
    }

    validInput = () => {
        const { email, phoneNumber } = this.state
        if (email.length == 0) {
            alert('Enter Email Address')
            return false
        } else if (!isValidEmail.test(email)) {
            alert('Enter A Valid Email Address')
            return false
        } else {
            return true
        }
    }

    proceed = () => {
        const { email, phoneNumber } = this.state
        if (this.validInput(email)) {
            this.submit(email, phoneNumber)
        }
    }
    submit = () => {
        const { email, phoneNumber } = this.state
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
                this.disabled(res.data.jwt)
               
            })
            .catch((err) => {
                alert(err.response.data)
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

                            <PhoneInput
                                ref="phone"
                                onPressFlag={this.onPressFlag}
                                style={styles.Input}
                                textStyle={styles.textInput}
                                textProps={{ placeholder: 'Telephone number' }}
                                onChangePhoneNumber={(number) => { this.setState({ phoneNumber: number }) }} />

                            <CountryPicker
                                ref="countryPicker"
                                onChange={value => this.selectCountry(value)}
                                translation="eng"
                                cca2={this.state.cca2}
                            >
                                <View />
                            </CountryPicker>


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

                            <CustomButton
                                isLoading={show}
                                style={styles.button} textStyle={styles.buttontext}
                                onPress={() => { this.proceed() }}
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

