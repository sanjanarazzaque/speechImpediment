// App.js or your main file
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/Login'; 
import Community1 from './components/Community1';
import Community2 from './components/Community2';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import CreateAccount from './components/CreateAccount';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  const loadFonts = async () => {
    const fontAssets = {
      
      'Kanit-Black': require('./assets/fonts/Kanit-Black.ttf'),
      'Kanit-BlackItalic': require('./assets/fonts/Kanit-BlackItalic.ttf'),
      'Kanit-Bold': require('./assets/fonts/Kanit-Bold.ttf'),
      'Kanit-BoldItalic': require('./assets/fonts/Kanit-BoldItalic.ttf'),
      'Kanit-ExtraBold': require('./assets/fonts/Kanit-ExtraBold.ttf'),
      'Kanit-ExtraBoldItalic': require('./assets/fonts/Kanit-ExtraBoldItalic.ttf'),
      'Kanit-ExtraLight': require('./assets/fonts/Kanit-ExtraLight.ttf'),
      'Kanit-ExtraLightItalic': require('./assets/fonts/Kanit-ExtraLightItalic.ttf'),
      'Kanit-Italic': require('./assets/fonts/Kanit-Italic.ttf'),
      'Kanit-Light': require('./assets/fonts/Kanit-Light.ttf'),
      'Kanit-LightItalic': require('./assets/fonts/Kanit-LightItalic.ttf'),
      'Kanit-Medium': require('./assets/fonts/Kanit-Medium.ttf'),
      'Kanit-MediumItalic': require('./assets/fonts/Kanit-MediumItalic.ttf'),
      'Kanit-Regular': require('./assets/fonts/Kanit-Regular.ttf'),
      'Kanit-SemiBold': require('./assets/fonts/Kanit-SemiBold.ttf'),
      'Kanit-SemiBoldItalic': require('./assets/fonts/Kanit-SemiBoldItalic.ttf'),
      'Kanit-Thin': require('./assets/fonts/Kanit-Thin.ttf'),
      'Kanit-ThinItalic': require('./assets/fonts/Kanit-ThinItalic.ttf'),
      'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
      'Poppins-BlackItalic': require('./assets/fonts/Poppins-BlackItalic.ttf'),
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'Poppins-BoldItalic': require('./assets/fonts/Poppins-BoldItalic.ttf'),
      'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
      'Poppins-ExtraBoldItalic': require('./assets/fonts/Poppins-ExtraBoldItalic.ttf'),
      'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
      'Poppins-ExtraLightItalic': require('./assets/fonts/Poppins-ExtraLightItalic.ttf'),
      'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
      'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
      'Poppins-LightItalic': require('./assets/fonts/Poppins-LightItalic.ttf'),
      'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
      'Poppins-MediumItalic': require('./assets/fonts/Poppins-MediumItalic.ttf'),
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
      'Poppins-SemiBoldItalic': require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
      'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
      'Poppins-ThinItalic': require('./assets/fonts/Poppins-ThinItalic.ttf'),
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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Community1" component={Community1} options={{headerShown: false}} />
        <Stack.Screen name = "Community2" component={Community2} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options ={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
