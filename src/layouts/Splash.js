import React, { Component } from 'react'
import { StatusBar, Text, Image, ScrollView } from 'react-native'
import {View} from 'react-native-animatable'
import Swiper from 'react-native-swiper'
import {header1, header2, header3, welcome_p1, welcome_p2, welcome_p3, step_1,
        step_2, step_3, example_1, example_2, example_3} from './../utils'
         import { NavigationActions } from 'react-navigation'
import { Card, CardTitle, CardImage, CardContent, CardAction } from 'react-native-card-view';
import { styles } from '../styles/splashstyles'
import {CustomText, CustomButton, CustomTextInput} from '../components'


class Splash extends Component {

    disabled=()=>{
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Signup' })],
          });
          this.props.navigation.dispatch(resetAction);
    }

    
    render() {
        return (
            <View style={styles.container} animation={'zoomIn'} delay={600} duration={400}>
                <StatusBar barStyle='light-content' />
                <View style={styles.image}>
                <Image source={require('../assets/images/logo.png')} />
                </View>

                <Swiper style={styles.wrapper}
                    dot={<View style={styles.dot} />}
                    activeDot={<View style={styles.active} />}
                    paginationStyle={{ bottom: 70}}
                    loop={false}>
                    <Card styles={styles.card}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <CardTitle styles={styles.cardTitle}>
                                <CustomText style={styles.headertext}
                                     content={header1}/>
                                
                            </CardTitle>
                            <CardContent>
                                <CustomText style={styles.text}
                                    content= {welcome_p1}/>
                                
                                <CustomText style={styles.text}
                                   content=  {welcome_p2}/>
                                
                                <CustomText style={styles.text}
                                    content={welcome_p3}/>
                                
                            </CardContent>
                        </ScrollView>
                    </Card>

                    <Card styles={styles.card}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <CardTitle styles={styles.cardTitle}>
                                <CustomText style={styles.headertext}
                                    content= {header2}/>
                                
                            </CardTitle>
                            <CardContent>
                                <CustomText style={styles.text}
                                   content={step_1}/>
                                   <CustomText style={styles.text}
                                   content={step_2}/>
                                   <CustomText style={styles.text}
                                   content={step_3}/>
                            </CardContent>
                        </ScrollView>
                    </Card>
                    <Card styles={styles.card}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <CardTitle styles={styles.cardTitle}>
                                <CustomText style={styles.headertext}
                                   content= {header3}/>
                                
                            </CardTitle>
                            <CardContent>
                                <CustomText style={styles.text}
                                   content={example_1}/>
                               
                                <CustomText style={styles.text}
                                    content={example_2}/>

                                <CustomText style={styles.text}
                                     content={example_3}/>
                                
                            </CardContent>
                        </ScrollView>

                    </Card>
                </Swiper>

                <CustomButton
                        style={styles.button} textStyle={styles.buttontext}
                        onPress={() => {this.disabled()}}
                          label= {'SIGN UP'}/>
                        
            </View>



        )
    }
}


export default Splash