import React, { Component } from 'react'
import axios from 'axios'
import  {offset} from '../utils'
import { View } from 'react-native-animatable'
import { styles } from '../styles/Signupstyles'
import PhoneInput from 'react-native-phone-input'
import { NavigationActions } from 'react-navigation'
import { Image, KeyboardAvoidingView, Alert} from 'react-native'
import { endpoint, isValidEmail , getToken, formatPhone} from '../utils/index'
import CountryPicker from 'react-native-country-picker-modal'
import { CustomButton, CustomTextInput, CustomText } from '../components'

class Signup extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            phoneNumber: '',
            show: false,
            cca2: 'US',
            jwt:'',
        };

        this.onPressFlag = this.onPressFlag.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
    
    }

     async componentWillMount(){
        const value = await getToken(); 
        await this.setState({jwt:value})
         await (value!=null)?this.disabled():null
    }

    componentDidMount() {
        this.setState({
            pickerData: this.refs.phone.getPickerData()
        });
    }

    disabled = () => {
        const{jwt} = this.state
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Confirmation', params: { res: jwt }, })],

        });
        this.props.navigation.dispatch(resetAction);
    }

    onPressFlag=()=>{
        this.refs.countryPicker.openModal()
    }

    selectCountry=(country)=>{
        this.refs.phone.selectCountry(country.cca2.toLowerCase());
        this.setState({ cca2: country.cca2 });
    }

       isFormValid=()=>{
         const  {email, phoneNumber} = this.state
          
              if(phoneNumber.length == 0){
                
                 this.showAlert('Enter Valid Phone Number')
                
              }else
             if(!isValidEmail(email)){
                this.showAlert('Enter Valid Email Address')

             }else{
                 this.submit()
             }
       }


    showAlert = (response) => {
        
        Alert.alert(
            'Message', response, [
                { text: 'OK' },
            ],
            { cancelable: false }
      )

    }

    submit = () => {
        const { email, phoneNumber,  } = this.state
          let  newPhone = formatPhone(phoneNumber, 4, '')
        this.setState({ show: true })
        let data = JSON.stringify({
            data: {
                newPhone,
                email
            }
        })

        axios.post(endpoint + 'submit', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                this.setState({ show: false, jwt: res.data.jwt })
                this.disabled()
               
            })
            .catch((err) => {
                this.setState({ show: false}) 
                this.showAlert(err.response.data)
            })
    }
    render() {
        const { show, phoneNumber, email} = this.state
    
        return (
            <View style={styles.container}>
                    <KeyboardAvoidingView
                        keyboardVerticalOffset={offset}
                        style={styles.container}
                        behavior="padding" >

                        <View style={styles.image} animation={'bounceIn'} delay={800} duration={400}>
                            <Image source={require('../assets/images/logo.png')} style={styles.imageSize} />
                            <CustomText style={styles.headertext}
                                content={'Sign Up Form'} />

                        </View>


                        <View style={styles.form} animation={'zoomIn'} delay={600} duration={400}>

                            <PhoneInput
                                ref="phone"
                                onPressFlag={this.onPressFlag}
                                style={styles.Input}
                                textStyle={styles.phoneInput}
                                textProps={{placeholder: 'Telephone number'}}
                                onChangePhoneNumber={(number)=>{this.setState({phoneNumber:number})}}/>
                                
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
                                onChangeText={(email) =>{ this.setState({ email: email })}}
                                value={email}
                                placeholder={'eg. JohnDoe@gmail.com'}
                                underlineColorAndroid={'transparent'}
                                placeholderTextColor={'rgba(255, 255,255,0.7)'}
                                keyboardType={'email-address'}
                                animation={'fadeIn'}
                            />

                            <CustomButton
                                isLoading={show}
                                style={styles.button} textStyle={styles.buttontext}
                                onPress={()=> this.isFormValid()}
                                label={'SIGN UP'} />

                        </View>
                    </KeyboardAvoidingView>
            </View>
        )
    }
}

export default Signup

