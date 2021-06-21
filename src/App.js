import React from 'react'
import { StatusBar, View } from 'react-native';

import CustomOnbaording from './custom-onboarding'
import CustomTabNavigation from './custom-tabNavigation'
import CustomReactNavHeader from './custom-reactNavigationHeader'
import CustomHorizontalList from './custom-horizontalList'
import CustomPieChart from './custom-pieChart'
import CustomTabNavigation2 from './custom-tabNavigation2'


function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "purple" }}>
      <StatusBar hidden />
      {/* <CustomOnbaording /> */}
      {/* <CustomTabNavigation /> */}
      {/* <CustomReactNavHeader /> */}
      {/* <CustomHorizontalList /> */}
      {/* <CustomPieChart /> */}
      <CustomTabNavigation2 />
    </View>
  )
}

export default App
