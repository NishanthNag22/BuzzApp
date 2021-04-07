import React from 'react';
import { ImagePickerIOS, Text, View } from 'react-native';
import Facebook from './screens/facebook';
import Instagram from './screens/instagram';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

export default class App extends React.Component {
    render() {
        return (
            <View></View>
        )
    }
}

const TabNavigator=createBottomTabNavigator({
  facebook:{screen:Facebook},
  instagram:{screen:Instagram}
})

const AppContainer=createAppContainer(TabNavigator)