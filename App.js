import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'
import Splash from './src/components/Splash'
import Signup from './src/components/Signup'
import Confirmation from './src/components/Confirmation'
import { AppLoading, Font } from 'expo'


const RootStack = StackNavigator({
    Splash: {screen: Splash, navigationOptions: { header: null }},
    Signup:{screen:Signup, navigationOptions: {header:null} },
    Confirmation:{screen:Confirmation, navigationOptions:{header:null}},
  })

export default class App extends React.Component {

  constructor(){
    super()
    this.state={
      loaded:false,
    }
  }

  componentWillMount() {
    this._loadAssetsAsync()
}

_loadAssetsAsync = async () => {
    await Font.loadAsync({
        bold: require('./src/assets/fonts/Cabin-Bold.ttf'),
        regular: require('./src/assets/fonts/Quicksand-Medium.ttf'),
    });
    this.setState({ loaded: true });
};
  render() {
    const{loaded} = this.state
    return (
      <View style={{flex:1, justifyContent:'center', elevation:4}}>
      {this.state.loaded ?
       <RootStack/>:
       null
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
