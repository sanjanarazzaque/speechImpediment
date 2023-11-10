import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from '../assets/imagesAndIcons/stuttrlogo.png'; // Adjust the path to your logo
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.accountText}>Already have an account</Text>
      </TouchableOpacity>
      <Text style={styles.continueText}>Or continue with</Text>

      <View style={styles.socialButtonContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/imagesAndIcons/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/imagesAndIcons/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/imagesAndIcons/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start', 
  },  
  logo: {
    width: screenWidth * 0.7, 
    height: screenHeight * 0.4, 
    marginTop: screenHeight * 0.12,
    marginBottom: screenHeight*0.05,
    resizeMode: 'contain', 
  },
  signupButton: {
    backgroundColor: '#CBD6FF',
    width: screenWidth * 0.7,
    borderRadius: 20,
    paddingVertical: 11,
    alignSelf: 'center', 
    marginVertical: 10,
  },  
  signupText: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Kanit-Regular', 
    textAlign: 'center',
  },
  accountText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Kanit-Regular', 
    textDecorationLine: 'underline',
    marginTop: 10,
    marginBottom: screenHeight * 0.05
  },
  continueText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold', 
    fontWeight: '700',
    marginTop: 40,
  },
  refreshButton: {
    backgroundColor: 'blue', 
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  refreshButtonText: {
    color: 'white',
  },
  home: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  greenText: {
    marginLeft: 10,
    color: 'green'
  },
  missionStatement: {
    top: 300,
    color: 'white',
    fontWeight: '400',
  },
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%%',
    marginTop: 20,
  },  
  socialButton: {
    width: screenWidth * 0.15,
    height: screenWidth * 0.1, 
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  
  socialIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },  
});
