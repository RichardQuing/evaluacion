import React from 'react'
import { SafeAreaView, SafeAreaViewBase } from 'react-native';
import { PositionsScreen } from './src/screens/PositionsScreen';
import { PositionsScreenDos } from './src/screens/PositionsScreenDos';
import { PositionsScreenSiete } from './src/screens/PositionsScreenSiete';
import { PositionsScreenSeis } from './src/screens/PositionsScreenSeis';
import { PositionsScreenCuatro } from './src/screens/PositionsScreenCuatro';
import { PositionsScreenOcho } from './src/screens/PositionsScreenOcho';
import { PositionsScreenNueve } from './src/screens/PositionsScreenNueve';
import { PositionsScreenTres } from './src/screens/PositionsScreenTres';
import { PositionsScreenCinco } from './src/screens/PositionsScreenCinco';
import { PrimerEjercicio } from './src/screens/PrimerEjercicio';




export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
     {/* <PrimerEjercicio/> */}
      {/* <PositionsScreen/> */}
      {/* <PositionsScreenDos/> */}
      {/* <PositionsScreenTres/> */}
      {/* <PositionsScreenCuatro/> */}
      <PositionsScreenCinco/>
      {/* <PositionsScreenSeis/> */}
      {/* <PositionsScreenSiete/> */}
      {/* <PositionsScreenOcho/> */}
      {/* <PositionsScreenNueve/> */}
      
    </SafeAreaView>

  )
}

export default App;
