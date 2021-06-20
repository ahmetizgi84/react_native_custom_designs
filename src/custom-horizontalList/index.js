import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Svg, Polygon } from 'react-native-svg'

const dummyData = [
    {
        id: 1,
        title: "Product 1",
        color: '#cdb4db'
    },
    {
        id: 2,
        title: "Product 2",
        color: '#ffc8dd'
    },
    {
        id: 3,
        title: "Product 3",
        color: '#ffafcc'
    },
    {
        id: 4,
        title: "Product 4",
        color: '#bde0fe'
    },
    {
        id: 5,
        title: "Product 5",
        color: '#ffd6a5'
    }
]

const App = () => {

    const renderItem = ({ item }) => {
        return (
            <View style={{
                height: 240,
                width: 120,
                backgroundColor: item.color,
                marginLeft: 10,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ color: 'white', fontSize: 16 }}>{item.title}</Text>

                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "95%",
                        height: "100%",
                    }}
                >
                    <Svg height="100%" width="100%" >
                        <Polygon
                            points="0, 0 160,0 160, 80"
                            fill="white"
                        />
                    </Svg>

                </View>

            </View>
        )
    }


    return (
        <View style={{
            flex: 1,

        }}>
            <FlatList
                contentContainerStyle={{
                    alignSelf: 'center',
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dummyData}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}


            />
        </View>
    )
}

export default App
