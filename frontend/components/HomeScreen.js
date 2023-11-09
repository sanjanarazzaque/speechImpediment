import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from '../assets/imagesAndIcons/stuttrlogo.png'; // Adjust the path to your logo
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Dimensions } from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
SplashScreen.preventAutoHideAsync();

export default function HomeScreen({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  const loadFonts = async () => {
    const fontAssets = {
      'Kanit-Black': require('../assets/fonts/Kanit-Black.ttf'),
      'Kanit-BlackItalic': require('../assets/fonts/Kanit-BlackItalic.ttf'),
      'Kanit-Bold': require('../assets/fonts/Kanit-Bold.ttf'),
      'Kanit-BoldItalic': require('../assets/fonts/Kanit-BoldItalic.ttf'),
      'Kanit-ExtraBold': require('../assets/fonts/Kanit-ExtraBold.ttf'),
      'Kanit-ExtraBoldItalic': require('../assets/fonts/Kanit-ExtraBoldItalic.ttf'),
      'Kanit-ExtraLight': require('../assets/fonts/Kanit-ExtraLight.ttf'),
      'Kanit-ExtraLightItalic': require('../assets/fonts/Kanit-ExtraLightItalic.ttf'),
      'Kanit-Italic': require('../assets/fonts/Kanit-Italic.ttf'),
      'Kanit-Light': require('../assets/fonts/Kanit-Light.ttf'),
      'Kanit-LightItalic': require('../assets/fonts/Kanit-LightItalic.ttf'),
      'Kanit-Medium': require('../assets/fonts/Kanit-Medium.ttf'),
      'Kanit-MediumItalic': require('../assets/fonts/Kanit-MediumItalic.ttf'),
      'Kanit-Regular': require('../assets/fonts/Kanit-Regular.ttf'),
      'Kanit-SemiBold': require('../assets/fonts/Kanit-SemiBold.ttf'),
      'Kanit-SemiBoldItalic': require('../assets/fonts/Kanit-SemiBoldItalic.ttf'),
      'Kanit-Thin': require('../assets/fonts/Kanit-Thin.ttf'),
      'Kanit-ThinItalic': require('../assets/fonts/Kanit-ThinItalic.ttf'),
      'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
      'Poppins-BlackItalic': require('../assets/fonts/Poppins-BlackItalic.ttf'),
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
      'Poppins-BoldItalic': require('../assets/fonts/Poppins-BoldItalic.ttf'),
      'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
      'Poppins-ExtraBoldItalic': require('../assets/fonts/Poppins-ExtraBoldItalic.ttf'),
      'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
      'Poppins-ExtraLightItalic': require('../assets/fonts/Poppins-ExtraLightItalic.ttf'),
      'Poppins-Italic': require('../assets/fonts/Poppins-Italic.ttf'),
      'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
      'Poppins-LightItalic': require('../assets/fonts/Poppins-LightItalic.ttf'),
      'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
      'Poppins-MediumItalic': require('../assets/fonts/Poppins-MediumItalic.ttf'),
      'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
      'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
      'Poppins-SemiBoldItalic': require('../assets/fonts/Poppins-SemiBoldItalic.ttf'),
      'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
      'Poppins-ThinItalic': require('../assets/fonts/Poppins-ThinItalic.ttf'),
    };
  
    await Font.loadAsync(fontAssets);
  };
  
  
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      }
    }
  
    prepare();
  }, []);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TouchableOpacity style={styles.signupButton}>
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
    fontFamily: 'Kanit-Bold', 
    textAlign: 'center',
  },
  accountText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Kanit', 
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
