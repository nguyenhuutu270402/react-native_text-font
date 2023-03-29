import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import Page1 from './src/screens/Page1';
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "EduNS": require('./src/assets/fonts/EduNSWACTFoundation-VariableFont_wght.ttf'),
    "Fasthand": require('./src/assets/fonts/Fasthand-Regular.ttf'),
    "Kanit-Thin": require('./src/assets/fonts/Kanti/Kanit-ExtraLight.ttf'),
    "Kanit-ThinItalic": require('./src/assets/fonts/Kanti/Kanit-ExtraLightItalic.ttf'),
    "Kanit-Light": require('./src/assets/fonts/Kanti/Kanit-Light.ttf'),
    "Kanit-LightItalic": require('./src/assets/fonts/Kanti/Kanit-LightItalic.ttf'),
    "Kanit-Regular": require('./src/assets/fonts/Kanti/Kanit-Regular.ttf'),
    "Kanit-Italic": require('./src/assets/fonts/Kanti/Kanit-Italic.ttf'),
    "Kanit-Bold": require('./src/assets/fonts/Kanti/Kanit-Bold.ttf'),
    "Kanit-BoldItalic": require('./src/assets/fonts/Kanti/Kanit-BoldItalic.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView}>
      <Page1 />
      <StatusBar style="dark" />
    </View>
  );
}
