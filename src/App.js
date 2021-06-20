import React from 'react'
import { StatusBar, View } from 'react-native';

import CustomOnbaording from './custom-onboarding'
import CustomTabNavigation from './custom-tabNavigation'
import CustomReactNavHeader from './custom-reactNavigationHeader'


function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      {/* <CustomOnbaording /> */}
      {/* <CustomTabNavigation /> */}
      <CustomReactNavHeader />
    </View>
  )
}

export default App
