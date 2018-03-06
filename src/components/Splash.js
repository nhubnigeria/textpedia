import React, { Component } from 'react'
import { StatusBar, Dimensions, Text, Image, ScrollView } from 'react-native'
import {View} from 'react-native-animatable'
import Swiper from 'react-native-swiper'
import {header1, header2, header3, welcome_p1, welcome_p2, welcome_p3, step_1,
        step_2, step_3, example_1, example_2, example_3} from './../utils'

import { Card, CardTitle, CardImage, CardContent, CardAction } from 'react-native-card-view';
import { styles } from '../styles/splashstyles'
import Button from 'apsl-react-native-button'

const { width, height } = Dimensions.get('window')

class Splash extends Component {
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
                                <Text style={styles.headertext}>
                                    {header1}
                                </Text>
                            </CardTitle>
                            <CardContent>
                                <Text style={styles.text}>
                                    {welcome_p1}
                                </Text>
                                <Text style={styles.text}>
                                    {welcome_p2}
                                </Text>
                                <Text style={styles.text}>
                                    {welcome_p3}
                                </Text>
                            </CardContent>
                        </ScrollView>
                    </Card>

                    <Card styles={styles.card}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <CardTitle styles={styles.cardTitle}>
                                <Text style={styles.headertext}>
                                    {header2}
                                </Text>
                            </CardTitle>
                            <CardContent>
                                <Text style={styles.text}>
                                    {step_1}
                                </Text>
                                <Text style={styles.text}>
                                    {step_2}
                                </Text>
                                <Text style={styles.text}>
                                    {step_3}
                                </Text>
                            </CardContent>
                        </ScrollView>
                    </Card>
                    <Card styles={styles.card}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <CardTitle styles={styles.cardTitle}>
                                <Text style={styles.headertext}>
                                    {header3}
                                </Text>
                            </CardTitle>
                            <CardContent>
                                <Text style={styles.text}>
                                    {example_1}
                                </Text>
                                <Text style={styles.text}>
                                    {example_2}
                                </Text>
                                <Text style={styles.text}>
                                    {example_3}
                                </Text>
                            </CardContent>
                        </ScrollView>

                    </Card>
                </Swiper>

                <Button
                        style={styles.button} textStyle={styles.buttontext}
                        onPress={() => {this.props.navigation.navigate('Signup')}}>
                           {'SIGN UP'}
                        </Button>
            </View>



        )
    }
}


export default Splash