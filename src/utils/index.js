import {Metrics}from './Metrics'
import { AsyncStorage } from 'react-native'

export const endpoint = 'https://textpedia-api.herokuapp.com/'
export const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 export const offset = Metrics.keyboard

export const header1 = 'ABOUT'
export const welcome_p1 = 'Looking for the meanings of words, phrases, or expressions?'
export const welcome_p2 = 'Without Timing out of a conversation/address for too long'
export const welcome_p3 = 'TextPedia is all you need'

export const header2 = 'HOW IT WORKS'
export const step_1 = '1. Signup using your phone number and email address, a token will be emailed to you.'
export const step_2 = '2. Confirm your identity by entering the token at the \"confirmation\" page, upon successful completion of the signup process, a welcome email will be sent to you with the phone number you can send your keywords to.'
export const step_3 = '3. To research on any words, simply SMS the keyword(s) to the phone number. They results will be sent to your email and with an SMS notification.'

export const header3 = 'EXAMPLE'
export const example_1 = '1. SMS "Abraham Lincoln" to the phone number. Multiple keywords are comma separated as shown in the next example.'
export const example_2 = '2. SMS "Abraham Lincoln", "Albert Einstein", "Milky Way" to the phone number.'
export const example_3 = '3. Finally, ensure that the keywords are spelled correctly, while Tetxpedia queries are case insensitive, at this time spell checking is not available. Enjoy the Textpedia service.'

 export const  isValidEmail = (email) => {
    if (email.length == 0) {
        return false
    } else if (!validEmail.test(email)) {
        return false
    } else {
        return true
    }
  }


   export const getToken = async (jwt) => {
        try {
             await AsyncStorage.getItem('jwt');
        } catch (error) {
        
        }
    }

    export const saveToken= async (jwt) => {
        try {
            await AsyncStorage.setItem('jwt', jwt);
          
        } catch (error) {

        }
    }

   export const  deleteToken = async (jwt) => {
        try {
            await AsyncStorage.removeItem(jwt);
        }
        catch (exception) {
        }
    }

    export const formatPhone=(str,index,chr) =>{
        if(index > str.length-1) return str;
        var res = str.charAt(4)
       if (res=='0'){
            return str.substr(0,index) + chr + str.substr(index+1)
       }else{
                str;
            }
    }


