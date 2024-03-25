import { View, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './src/screen/HomeScreen'
import { Colors } from './src/theme/Colors'

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <HomeScreen />
    </View>
  )
}

export default App