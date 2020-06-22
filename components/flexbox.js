import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Flexbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}></Text>
            <Text style={styles.boxTwo}></Text>
            <Text style={styles.boxThree}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 20
    },
    boxOne: {
        position: 'absolute',
        backgroundColor: 'red',
        padding: 30
    },
    boxTwo: {
        position: 'absolute',
        margin: 30,
        backgroundColor: 'gold',
        padding: 30
    },
    boxThree: {
        position: 'absolute',
        margin: 60,
        backgroundColor: 'green',
        padding: 30
    }
})
