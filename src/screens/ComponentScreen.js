import React from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity } from 'react-native';

const ComponentScreen = (props) => {
  return( 
     <View>
          <Text style={styles.text}>Hallo</Text>
          <Text style={styles.textsub}>putu eka</Text>
     </View> 
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 60
  },
  textsub:{
    fontSize:15
  }
});

export default ComponentScreen;
