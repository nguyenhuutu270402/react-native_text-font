import { Text, View } from 'react-native'
import React from 'react'
import stylesLight from '../styles/StylePage1';
import stylesDark from '../styles/StylePage1Dark';
import { StatusBar } from 'expo-status-bar';

const Page1 = () => {
    const styles = stylesDark;
    return (
        <View style={styles.container}>
            <Text style={styles.text0}>HELLO WORLD</Text>
            <Text style={styles.text1}>HELLO WORLD</Text>
            <Text style={styles.text2}>HELLO WORLD</Text>
            <Text style={styles.text3}>HELLO WORLD</Text>
            <Text style={styles.text4}>HELLO WORLD</Text>
            <Text style={styles.text5}>HELLO WORLD</Text>
            <Text style={styles.text6}>HELLO WORLD</Text>
            <Text style={styles.text7}>HELLO WORLD</Text>
            <Text style={styles.text8}>HELLO WORLD</Text>
        </View>
    )
}
export default Page1
