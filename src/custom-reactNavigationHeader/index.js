import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: null,
                        headerLeft: ({ onPress }) => (null), // default header içinde geriye gitmek için bir onPress var. O onPress'i kullanmak için destruct ediyoruz.
                        //headerLeft: null,
                        headerRight: () => (
                            <TouchableOpacity style={{
                                marginRight: 10,
                            }}>
                                <Icon name="bars" size={24} color='#000' />
                            </TouchableOpacity>
                        ),
                        headerStyle: {
                            backgroundColor: '#FFFFFF',
                            elevation: 0
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App


function HomeScreen() {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}