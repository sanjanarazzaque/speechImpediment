import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function CreateAccount({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleForgotPasswordPress = () => {
        // for now
        console.log('Forgot Password Pressed');
      };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.loginTitle}>Create Account</Text>
      </View>

      {/* Input fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Confirm Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      {/* Sign in and already have an account buttons */}
      <View style={styles.signInContainer}>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.createAccountText}>Already have an account</Text>
        </TouchableOpacity>
      </View>

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
    padding: 20,
  },
  titleContainer: {
    marginTop: screenHeight * 0.1,
    alignItems: 'center',
  },
  loginTitle: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    fontWeight: '800',
  },
  welcomeBack: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    marginTop: 20,
    marginBottom: screenHeight * 0.02
  },
  socialButtonContainer: {
    position: 'absolute',
    bottom: screenHeight * 0.15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialButton: {
    // Similar to the HomeScreen
  },
  signInContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20, // Adjust as needed based on your layout
  },
  signInButton: {
    backgroundColor: '#B2C3FF',
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    padding: 15,
  },
  signInText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
  },
  createAccountButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
  },
  createAccountText: {
    color: '#494949',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    marginBottom: screenHeight * 0.1,
    textDecorationLine: 'underline',
  },
  inputContainer: {
    width: '90%',
    marginTop: screenHeight * 0.07, 
  },
  inputField: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  // Remove the absolute positioning from forgotPassword style
  forgotPassword: {
    color: '#85A0FF',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 10, // Adjust the margin as needed
    marginBottom: screenHeight * 0.05,
    marginRight: screenWidth * 0.05,
  },
  forgotPasswordContainer: {
    width: '100%', // Take up the full width to allow alignment
    alignItems: 'flex-end', // Aligns the content (the text) to the right
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
  inputField: {
    backgroundColor: '#FFF', // A light color for the input field
    borderRadius: 10,
    width: '100%', // Use full width of the input container
    padding: 15,
    fontSize: 16, // Reasonable font size for input text
    fontFamily: 'Poppins-Regular', // Use the regular font weight
    color: '#000', // Text color
    borderWidth: 1, // Optional: if you want a border
    borderColor: '#ddd', // A light border color
    marginBottom: 15, // Space between the input fields
  },
});

export default CreateAccount;
