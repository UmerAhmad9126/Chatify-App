import { View, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './src/screen/HomeScreen'
import { Colors } from './src/theme/Colors'
import { NavigationContainer } from '@react-navigation/native'



const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <HomeScreen />
    </NavigationContainer>
  )
}

export default App