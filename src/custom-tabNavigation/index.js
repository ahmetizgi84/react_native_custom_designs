import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();



/**
 * 
 * black : #1E1F20
 * white: #FFFFFF
 * lightGray: #EFF2F5
 * gray : #BEC1D2
 */

const tabOptions = {
    showLabel: false,
    style: {
        height: '10%'
    }
}

const CameraIcon = ({ tintColor }) => {
    return (
        <View
            style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#00996D",
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Icon name="camera" size={24} color='#FFFFFF' />
        </View>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={tabOptions}
                screenOptions={({ route }) => (
                    {
                        tabBarIcon: ({ focused }) => {
                            const tintColor = focused ? '#00996D' : '#606D87'

                            switch (route.name) {
                                case 'Home':
                                    return (
                                        <Icon name="bolt" size={24} color={tintColor} />
                                    )

                                case 'Box':
                                    return (
                                        <Icon name="dropbox" size={24} color={tintColor} />
                                    )

                                case 'Camera':
                                    return (
                                        <CameraIcon tintColor={tintColor} />
                                    )

                                case 'Favourite':
                                    return (
                                        <Icon name="heart" size={24} color={tintColor} />
                                    )

                                case 'Search':
                                    return (
                                        <Icon name="search" size={24} color={tintColor} />
                                    )
                            }
                        }
                    }
                )}

            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Box" component={BoxScreen} />
                <Tab.Screen name="Camera" component={CameraScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Favourite" component={FavouriteScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function BoxScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Box!</Text>
        </View>
    );
}

function CameraScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Camera!</Text>
        </View>
    );
}

function FavouriteScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Favourite!</Text>
        </View>
    );
}

function SearchScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Search!</Text>
        </View>
    );
}