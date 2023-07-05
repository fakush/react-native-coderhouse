import { StyleSheet, Text, Pressable } from 'react-native'
import { Icon } from 'react-native-elements'
import globalStyles from '../../globalStyles'
import React from 'react'

const DefaultButton = ({ icon, onPress }) => {
    return (
        <Pressable
            style={[{ backgroundColor: 'transparent' }, styles.buttonStyle]}
            onPress={() => onPress}
        >
            <Icon name={{ icon }} size={50} type='material' />
        </Pressable>
    )
}

export default DefaultButton

const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})