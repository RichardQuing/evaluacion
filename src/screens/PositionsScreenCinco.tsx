import React from 'react' 
import { StyleSheet, Text, View } from 'react-native' 
export const PositionsScreenCinco = () => { 
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
    height: '100%',
    position: 'relative',
    backgroundColor: 'purple',
    
    
    
  },
  boxOrange: {
    
    width: 100,
    height: '100%',
    
    backgroundColor: 'orange',
    
       
    
  },
  boxGreen: {
    
    width: 100,
    height: '100%',
    position: 'relative',
    backgroundColor: 'green',
    
    
  }
})