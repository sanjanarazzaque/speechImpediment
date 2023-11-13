import React from "react";
import {View, StyleSheet, Text, Image} from 'react-native';

const ImageGrid = () => {
    const images = [
        require('../assets/imagesAndIcons/hobbies.jpeg'),
        require('../assets/imagesAndIcons/hobbies.jpeg'),
        require('../assets/imagesAndIcons/hobbies.jpeg'),
        require('../assets/imagesAndIcons/hobbies.jpeg'),
        require('../assets/imagesAndIcons/hobbies.jpeg'),
        require('../assets/imagesAndIcons/hobbies.jpeg'),
    ];

    return (
        <View style={styles.gridContainer}>
            {images.map((image, index) => (
                <View key={index} style={styles.gridItem}>
                    <Image source={image} style={styles.image}/>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    gridItem: {
        width: '48%',
        aspectRatio: 1,
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default ImageGrid;