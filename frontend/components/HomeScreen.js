import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function HomeScreen() {
  return (
    <View style={styles.home}>
      <Text style={styles.baseText}>
        Stutt<Text style={styles.greenText}>R</Text>
      </Text>
      <Text style={styles.missionStatement}>
        A Speech Impediment focused app
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  baseText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 40,
  },
  greenText: {
    marginLeft: 10,
    color: 'green'
  },
  missionStatement: {
    top: 300,
    color: 'white',
    fontWeight: '400',
  }
});
