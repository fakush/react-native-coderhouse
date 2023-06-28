import { Button, ScrollView, StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

const MainScreen = ({taskList}) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TextInput style={styles.input} />
                <TouchableOpacity style={styles.button}>
                    <Text>Agregar tarea</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
                <ScrollView>
                    {taskList.map(item => 
                            <View key={item.id}>
                                <Text>{item.task}</Text>
                            </View>
                    )}
                </ScrollView>
            </View>
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'azure',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    bottomContainer: {
        flex: 4,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'beige',
        width: '100%',
    },
    input: {
        width: 250,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
    button: {
        width: 200,
        height: 40,
        marginBottom: 10,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
    }

})