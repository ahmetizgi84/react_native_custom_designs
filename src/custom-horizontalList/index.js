import React from 'react'
import { View, Text, FlatList, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import { Svg, Polygon } from 'react-native-svg'
import { BlurView } from "@react-native-community/blur";
import Icon from 'react-native-vector-icons/FontAwesome';

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

    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{
                height: 240,
                width: 120,
                backgroundColor: item.color,
                marginLeft: 10,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }}
                onPress={() => setIsModalOpen(true)}
            >
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

            </TouchableOpacity>
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

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalOpen}
            >
                <BlurView
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    blurType="light"
                    blurAmount={20}
                    reducedTransparencyFallbackColor="white"
                >

                    <TouchableOpacity
                        style={styles.absolute}
                        onPress={() => setIsModalOpen(false)}
                    >
                    </TouchableOpacity>

                </BlurView>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})

export default App
