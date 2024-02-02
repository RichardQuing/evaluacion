import React from 'react' 
import { StyleSheet, Text, View } from 'react-native' 
export const PositionsScreenTres = () => { 
  return ( 
    <View style={styles.container}> 
        <View style={styles.boxPurple}></View> 
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>  
    </View> 
  ) 
} 
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'
    
  },
  boxPurple: {
  
    width: 100,
    height: 100,
    position: 'relative',
    backgroundColor: 'purple',
    top:-100,
    
    
  },
  boxOrange: {
    
    width: 100,
    height: 100,
    
    backgroundColor: 'orange',
    
       
    
  },
  boxGreen: {
    
    width: 100,
    height: 100,
    position: 'relative',
    backgroundColor: 'green',
    top:-200,
    
  }
})