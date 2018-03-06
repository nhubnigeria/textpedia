import React, { Component } from 'react'
import { TextInput, Image, KeyboardAvoidingView } from 'react-native'
import { View, Text } from 'react-native-animatable'
import axios from 'axios'
import { endpoint } from '../utils/index'
import { styles } from '../styles/Confirmationstyles'
import Button from 'apsl-react-native-button'

class Confirmation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: '',
            auth: false,
            error: '',
            show:false
        }
    }

    validInput = (token) =>{
       if(token.length==0){
           return false
       }else{
           return true
       }
    }

    proceed=(token)=>{

        if(this.validInput(token)){
            this.submit(token)
        }else{
            alert('Please Enter  Correct Token')
        }
    }
    submit = (token) => {
      
        this.setState({show:true})
        const jwt = this.props.navigation.state.params.res;
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
                this.setState({ auth: true, show:false})
                alert('Registration Completed')
            })
            .catch((err) => {
                this.setState({ error: err , show:false})
            })
    }
    render() {
        const{show, token}=this.state
        return (
            <View style={styles.container}>
            <KeyboardAvoidingView
            keyboardVerticalOffset={350}
                style={styles.container}
                behavior="padding"
                >
            <View style={styles.image} animation={'bounceIn'} delay={800} duration={400}>
                    <Image source={require('../assets/images/logo.png')} />
                    <Text style={styles.headertext}>
                            {'Enter the Token Sent to Your Mail'}
                        </Text>
                </View>
                {this.state.auth ?
                    <Text > Account Activated </Text> :
                    <View style={styles.form} animation={'zoomIn'} delay={600} duration={400}>
                        
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(token) => { this.setState({ token:token }) }}
                            value={token}
                            underlineColorAndroid={'transparent'}
                            placeholder={'abcfddd12345567890'}
                            placeholderTextColor={'rgba(255, 255,255,0.7)'}
                        />
                            <Button
                                isLoading={show}
                                style={styles.button} textStyle={styles.buttontext}
                                onPress={() => { this.proceed(token)}}>
                                {'FINISH'}
                            </Button>
                    </View>
                }

                {/*this.state.error === '' ? undefined : 
                <View>
                <Text>{this.state.error}</Text>
                <Button
                    onPress={() => { this.setState({error: ''}) }}
                    title="Okay"
                    color="#841584"
                />                
                </View>*/}
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default Confirmation;