import React from 'react'
import { StatusBar, View } from 'react-native';

import CustomOnbaording from './custom-onboarding'
import CustomTabNavigation from './custom-tabNavigation'
import CustomReactNavHeader from './custom-reactNavigationHeader'
import CustomHorizontalList from './custom-horizontalList'
import CustomPieChart from './custom-pieChart'


function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar hidden />
      {/* <CustomOnbaording /> */}
      {/* <CustomTabNavigation /> */}
      {/* <CustomReactNavHeader /> */}
      {/* <CustomHorizontalList /> */}
      <CustomPieChart />
    </View>
  )
}

export default App
