import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../globalStyles'
import { colors } from '../../Global/colors';
import { shadows } from '../../Global/shadows';
import IconButton from '../Buttons/IconButton';

const RenderItemTask = ({ item, onPressTask, onTaskComplete, onTaskDelete }) => {
    return (
        <Pressable 
            onPress={() => onPressTask(item)}
        >
            <View style={styles.viewItem}>
                <Text style={globalStyles.textRegular}>{item.task}</Text>
                {item.completed && <IconButton icon={'delete-circle'} color={colors.secondaryAccent} onPress={() => onTaskDelete(item)} />}
                {!item.completed && <IconButton icon={'check-circle'} color={colors.secondaryAccent} onPress={() => onTaskComplete(item)}/>}
            </View>
        </Pressable>
    )
}

export default RenderItemTask

const styles = StyleSheet.create({
    viewItem: {
        flexDirection: 'row',
        gap: 10,
        padding: 10,
        backgroundColor: colors.secondary,
        borderColor: colors.secondaryAccent,
        borderWidth: 1,
        marginLeft: 5,
        marginBottom: 15,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '80%',
        ...shadows
    }
})