import React, {Component} from 'react';
import {View, Platform} from 'react-native';
import NinePatchView from 'react-native-9patch-image';

export default class Main extends Component {

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <NinePatchView
                    style={{width: 200, height: 200}}
                    source={Platform.OS === 'android' ? {uri: 'image'} : require('./image.png')}
                    capInsets={{top: 40, left: 29, bottom: 9, right: 29}}/>
            </View>)
    }
}