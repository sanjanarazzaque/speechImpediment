import React from "react";
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const NavBar = ({navigator}) => {
    const navigateToScreen = (screenName) => {
        console.log(`Navigating to ${screenName}`);
    }

    return (
        <View style={styles.navBar}>
            <TouchableOpacity
                style={styles.navItem}
                onPress={() => navigateToScreen('Home')}
            >
                <Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navItem}
                onPress={() => navigateToScreen('Community')}
            >
                <Text>Community</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navItem}
                onPress={() => navigateToScreen('Feed')}
            >
                <Text>Feed</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navItem}
                onPress={() => navigateToScreen('Profile')}
            >
                <Text>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 10,
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
});

export default NavBar;