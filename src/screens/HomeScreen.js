import React from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return( 
     <View>
          <Text style={styles.text}>HomeScreen</Text>
          <Button
            onPress={()=> props.navigation.navigate('Conponents')}
            title="Go to demo Component" 
          />
          <Button
            onPress={()=> props.navigation.navigate('List')}
            title="Go to List Demo" 
          />
          <Button
            onPress={()=> props.navigation.navigate('Image')}
            title="Go to Image Demo" 
          />
          <Button
            onPress={()=> props.navigation.navigate('Screen')}
            title="Go to Counter Demo" 
          />
          <Button
            onPress={()=> props.navigation.navigate('Color')}
            title="Go to Color Demo" 
          />
          <Button
            onPress={()=> props.navigation.navigate('Squere')}
            title="Go to Squere Demo" 
          />
          <TouchableOpacity onPress={() => props.navigation.navigate('List')} style={{marginTop:20}}>
              <Text>Go to List Demo</Text>
          </TouchableOpacity>
     </View> 
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button :{
    marginTop:10
  }
});

export default HomeScreen;
