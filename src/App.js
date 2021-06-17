import React from 'react'
import { StatusBar, View } from 'react-native';

import CustomOnbaording from './custom-onboarding'


function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <CustomOnbaording />
    </View>
  )
}

export default App
