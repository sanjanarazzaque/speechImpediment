import React from "react";
import {View, ScrollView, StyleSheet, Text, Image} from 'react-native';

const HorizontalCarousel = () => {
    const data = [
        require('../assets/imagesAndIcons/culture.jpeg'),
        require('../assets/imagesAndIcons/professional.jpeg'),
        require('../assets/imagesAndIcons/hobbies.jpeg'),
        require('../assets/imagesAndIcons/religion.jpeg'),
    ];

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContainer}
        >
            {data.map((image, index) => (
                <View key={index} style={styles.carouselItem}>
                    <Image source={image} style={styles.image} />
                </View>
            ))}
        </ScrollView>
    );
};    

const styles = StyleSheet.create({
    carouselContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    carouselItem: {
        width: 150,
        height: 150,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
});

export default HorizontalCarousel;