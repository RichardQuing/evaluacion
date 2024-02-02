import React from 'react' 
import { StyleSheet, Text, View } from 'react-native' 
export const PositionsScreenSeis = () => { 
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
  },
  boxPurple: {
    flex: 1,
    width: '100%',
    height: 100,
    position: 'relative',
    backgroundColor: 'purple',
    alignSelf: 'flex-end'
  },
  boxOrange: {
    flex: 1,
    width: '100%',
    height: 100,
    position: 'relative',
    backgroundColor: 'orange',
    alignSelf: 'flex-end'
  },
  boxGreen: {
    flex: 2,
    width: '100%',
    height: 100,
    position: 'relative',
    backgroundColor: 'green',
    alignSelf: 'flex-end'
  }
})