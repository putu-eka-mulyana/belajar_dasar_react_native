import React,{useState} from 'react';
import {View,Text,StyleSheet,Button,FlatList} from 'react-native';

const ColorScreen = () =>{
    const [color,setColor] = useState([]);
    return <View>
        <Button title="Add New Color" onPress={()=>{
            setColor([...color,randomRgb()])
        }}/>
        <FlatList
            data={color}
            keyExtractor={color=>color}
            renderItem={({item})=>{
                return <View style={{height:100,width:100,backgroundColor:item}} />
            }}
        />
    </View>
}
const randomRgb=()=>{
        const red = Math.floor(Math.random() * 256 );
        const green = Math.floor(Math.random() * 256 );
        const blue = Math.floor(Math.random() * 256 );
    return `rgb(${red},${green},${blue})`;
}
export default ColorScreen;