import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
export default function App() {
  const [loadFont] = useFonts({
    EduNS: require('./src/assets/fonts/EduNSWACTFoundation-VariableFont_wght.ttf'),
    Fasthand: require('./src/assets/fonts/Fasthand-Regular.ttf'),
  });
  if (!loadFont) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Open up App.js to start working on your app!</Text>
      <Text style={styles.text2}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text2: {
    fontSize: 20,
    fontFamily: 'Fasthand',
    fontWeight: '600',

  },
  text1: {
    fontSize: 20,
    fontFamily: 'EduNS',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
