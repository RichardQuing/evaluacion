import React from 'react' 
import { StyleSheet, Text, View } from 'react-native' 
export const PositionsScreenOcho = () => { 
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
    flexDirection: 'column',
    alignItems:'center',
   justifyContent:'center'
    
  },
  boxPurple: {
  
    width: 100,
    height: 100,
    position: 'relative',
    backgroundColor: 'purple',
    
    
  },
  boxOrange: {
    
    width: 100,
    height: 100,
    position: 'relative',
    backgroundColor: 'orange',
    left:100
    
  },
  boxGreen: {
    
    width: 100,
    height: 100,
    position: 'relative',
    backgroundColor: 'green',
    
  }
})