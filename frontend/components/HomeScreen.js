import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';

export default function HomeScreen() {
  const [greeting, setGreeting] = useState('');


  const fetchData = async () => {
    try {
      // Use your machine's IP address here
      const response = await axios.get('http://127.0.0.1:5000/greet');
      setGreeting(response.data.greeting);
    } catch (error) {
      console.error("There was an error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.home}>
      <Text style={styles.baseText}> 
        Stutt<Text style={styles.greenText}>R</Text>
      </Text>
      <Text style={styles.missionStatement}>
        A Speech Impediment focused app
      </Text>
      <Text style={styles.baseText}>
        {greeting}
      </Text>
      <Button title="Refresh Greeting" onPress={fetchData} />
    </View>
  );
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
