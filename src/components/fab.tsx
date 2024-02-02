import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props{
    title:string;                                                                                                                                                                                                                      
}                                                                                                                                                                                                                                                                                                                                                                            


export const fab = (props:Props) => {
    console.log(props.title)
  return (
    <TouchableOpacity onPress={() =>  console.log('HOLA')} >
        <View style={styles.button}><Text style={styles.fab}>
          +1
        </Text></View>

      </TouchableOpacity>
  )                                                                                                    
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
      }
      , title: {
        textAlign: 'center',
        fontSize: 30,
        top: -60
      }
      , button: {
        backgroundColor: 'red', borderRadius: 100
      }
      , fab: {
        backgroundColor: 'red',
        width: 70,
        height: 70,
        borderRadius: 100
      }
})