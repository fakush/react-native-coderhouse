import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../globalStyles'

const RenderItemTask = ({ item, onPressTask }) => {
    console.log(item);
    return (
        <Pressable 
            // onPress={onPressTask(item)}
        >
            <View style={[globalStyles.rowContainer, styles.viewItem]}>
                <Text style={globalStyles.textRegular}>{item.task}</Text>
            </View>
        </Pressable>
    )
}

export default RenderItemTask

const styles = StyleSheet.create({
    viewItem: {
    }
})