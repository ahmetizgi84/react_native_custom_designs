import React from 'react'
import { StatusBar, View } from 'react-native';

import CustomOnbaording from './custom-onboarding'
import CustomTabNavigation from './custom-tabNavigation'
import CustomReactNavHeader from './custom-reactNavigationHeader'
import CustomHorizontalList from './custom-horizontalList'


function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar hidden />
      {/* <CustomOnbaording /> */}
      {/* <CustomTabNavigation /> */}
      {/* <CustomReactNavHeader /> */}
      <CustomHorizontalList />
    </View>
  )
}

export default App
