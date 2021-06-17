import React from 'react';
import {
    Animated,
    Text,
    Image,
    View,
    Dimensions,
    FlatList,
    StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
    {
        key: '3571572',
        title: 'Multi-lateral intermediate moratorium',
        description: "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
        image: 'https://image.flaticon.com/icons/png/256/3571/3571572.png',
    },
    {
        key: '3571747',
        title: 'Automated radical data-warehouse',
        description: 'Use the optical SAS system, then you can navigate the auxiliary alarm!',
        image: 'https://image.flaticon.com/icons/png/256/3571/3571747.png',
    },
    {
        key: '3571680',
        title: 'Inverse attitude-oriented system engine',
        description: 'The ADP array is down, compress the online sensor so we can input the HTTP panel!',
        image: 'https://image.flaticon.com/icons/png/256/3571/3571680.png',
    },
    {
        key: '3571603',
        title: 'Monitored global data-warehouse',
        description: 'We need to program the open-source IB interface!',
        image: 'https://image.flaticon.com/icons/png/256/3571/3571603.png',
    },
];

const App = () => {

    const scrollX = React.useRef(new Animated.Value(0)).current;
    // I am using this useRef. 
    // Because, React will keep track of this value and whenever this component will be re-rendered,
    // the value is not going to change.

    const Indicator = ({ scrollX }) => {


        return (
            <View style={{
                position: 'absolute',
                bottom: 100,
                flexDirection: 'row'
            }}>
                {
                    DATA.map((_, i) => {

                        const inputRange = [(i - 1) * width, i * width, (i + 1) * width] // previous slide, current slide, next slide

                        const scale = scrollX.interpolate({
                            inputRange,
                            outputRange: [.8, 1.4, .8],
                            extrapolate: 'clamp' // reason for that is we dont want to move outside of that (inputRange) range for this particular item
                        })

                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [.6, .9, .6],
                            extrapolate: 'clamp' // reason for that is we dont want to move outside of that (inputRange) range for this particular item
                        })

                        return (
                            <Animated.View
                                key={`indicator-${i}`}
                                style={{
                                    height: 10,
                                    width: 10,
                                    borderRadius: 5,
                                    backgroundColor: '#FFF',
                                    margin: 10,
                                    transform: [{ scale }],
                                    opacity
                                }}
                            >

                            </Animated.View>
                        )
                    })
                }
            </View>
        )
    }

    const Backdrop = ({ scrollX }) => {

        const backgroundColor = scrollX.interpolate({
            inputRange: bgs.map((_, i) => i * width),
            outputRange: bgs.map((bg) => bg),
        })

        return (
            <Animated.View
                style={[StyleSheet.absoluteFillObject, { backgroundColor }]}
            >

            </Animated.View>
        )
    }

    const Square = ({ scrollX }) => {

        const YOLO = Animated.modulo(Animated.divide(
            Animated.modulo(scrollX, width),
            new Animated.Value(width)
        ), 1)

        const rotate = YOLO.interpolate({
            inputRange: [0, .5, 1],
            outputRange: ['35deg', '0deg', '35deg']
        })

        const translateX = YOLO.interpolate({
            inputRange: [0, .5, 1],
            outputRange: [0, -height, 0]
        })

        return (
            <Animated.View
                style={{
                    width: height,
                    height: height,
                    backgroundColor: "#FFF",
                    borderRadius: 86,
                    position: 'absolute',
                    top: -height * .6,
                    left: -height * .3,
                    transform: [{
                        rotate
                    },
                    {
                        translateX
                    }
                    ]
                }}
            />

        )
    }


    return (
        <View style={styles.container}>

            <Backdrop scrollX={scrollX} />

            <Square scrollX={scrollX} />

            <Animated.FlatList
                contentContainerStyle={{ paddingBottom: 100 }}
                data={DATA}
                horizontal
                //scrollEventThrottle={32} // ios only
                pagingEnabled
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.key}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                padding: 20,
                                width,
                                alignItems: 'center',
                            }}>
                            <View style={{ flex: .7, justifyContent: 'center' }}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{
                                        width: width / 2,
                                        height: width / 2,
                                        resizeMode: 'contain',
                                    }}
                                />
                            </View>
                            <View style={{ flex: .3 }}>
                                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 28, marginBottom: 10 }}>{item.title}</Text>
                                <Text style={{ color: '#FFF' }}>{item.description}</Text>
                            </View>
                        </View>
                    );
                }}
            />
            <Indicator scrollX={scrollX} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
