import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/FontAwesome5';
import Svg, { Path } from 'react-native-svg'

const Tabs = createBottomTabNavigator();

const App = () => {

    const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
        var isSelected = accessibilityState.selected

        if (isSelected) {
            return (
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View style={{ flexDirection: "row", position: "absolute", top: 0 }}>
                        <View style={{ flex: 1, backgroundColor: "white" }}></View>
                        <Svg
                            width={75}
                            height={61}
                            viewBox="0 0 75 61"
                        >
                            <Path
                                d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                                fill="#FFFFFF"
                            />
                        </Svg>
                        <View style={{ flex: 1, backgroundColor: "white" }}></View>
                    </View>

                    <TouchableOpacity
                        style={{
                            top: -22.5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor: "white"
                        }}
                        onPress={onPress}
                    >
                        {children}
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        height: 60,
                        backgroundColor: 'white'
                    }}
                    activeOpacity={1}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            )
        }
    }

    const CustomTabBar = (props) => {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: "#FFFFFF"
                    }}
                >

                </View>
                <BottomTabBar {...props.props} />
            </View>
        )
    }

    return (
        <NavigationContainer>
            <Tabs.Navigator
                tabBarOptions={{
                    showLabel: false,
                    style: {
                        backgroundColor: 'transparent',
                        elevation: 0,
                        borderTopWidth: 0
                    }
                }}
            // tabBar={(props) => (
            //     <CustomTabBar
            //         props={props}
            //     />
            // )}
            >
                <Tabs.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name="utensils" size={24} color={focused ? '#DA0037' : '#444444'} />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }}

                />

                <Tabs.Screen
                    name="Search"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name="search" size={24} color={focused ? '#DA0037' : '#444444'} />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name="Like"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name="heart" size={24} color={focused ? '#DA0037' : '#444444'} />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name="User"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name="user" size={24} color={focused ? '#DA0037' : '#444444'} />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default App


function HomeScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: "purple" }}>
            <Text>Hello from Home</Text>
        </View>
    )
}