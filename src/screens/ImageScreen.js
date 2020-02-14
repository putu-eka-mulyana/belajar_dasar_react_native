import React from 'react';
import { Text,View,StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetails';

const ImageScreen = () =>{
    return <View>
        <ImageDetail title="beach" imageSource={require('../../assets/beach.jpg')} score="9"/>
        <ImageDetail title="forest" imageSource={require('../../assets/forest.jpg')} score="8"/>
        <ImageDetail title="mountain" imageSource={require('../../assets/mountain.jpg')} score="4"/>
    </View>;
}
const styles = StyleSheet.create({})
export default ImageScreen;