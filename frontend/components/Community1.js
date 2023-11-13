import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HorizontalCarousel from './HorizontalCarousel';

const Community1 = () => {
    const [selectedTab, setSelectedTab] = useState('Discover');

    const renderContent = () => {
        if (selectedTab === 'Discover') {
            return (
                <View style={styles.contentContainer}>
                    {/* Content for Discover tab */}
                    <Text style={styles.black}>General Discussion</Text>
                    <HorizontalCarousel />
                </View>
            );
        } else if (selectedTab === 'YourGroups') {
            return (
                <View style={styles.contentContainer}>
                    {/* Content for Your Groups tab */}
                    <Text>Your Groups Tab Content</Text>
                </View>
            );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tabContainer}>
                <TouchableOpacity onPress={() => setSelectedTab('Discover')} style={selectedTab === 'Discover' ? styles.selectedTab : styles.tab}>
                    <Text style={styles.tabText}>Discover</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTab('YourGroups')} style={selectedTab === 'YourGroups' ? styles.selectedTab : styles.tab}>
                    <Text style={styles.tabText}>Your Groups</Text>
                </TouchableOpacity>
            </View>

            {renderContent()}
        </SafeAreaView>
    );
};

export default Community1;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
    },
    tab: {
        paddingVertical: 10,
    },
    selectedTab: {
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
    },
    tabText: {
        fontSize: 18,
        color: 'black',
    },
    contentContainer: {
        flex: 1,
    },
});
