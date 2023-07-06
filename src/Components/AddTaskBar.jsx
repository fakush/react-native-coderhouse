import { Keyboard, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import globalStyles, {colors} from '../globalStyles'
import DefaultButton from './Buttons/DefaultButton'

const AddTaskBar = ({ input, onAddTask, setInput }) => {
    const setTask = () => {
        Keyboard.dismiss()
        onAddTask()
        setInput("")
    }

    return (
        <View style={[globalStyles.rowContainer, styles.view]}>
            <TextInput
                style={globalStyles.input}
                placeholder="Add Task"
                onChangeText={setInput}
                value={input}
            />
            <DefaultButton icon={'plus-circle'} color={colors.dark} onPress={setTask} text={'Add'} />
        </View>
    )
}

export default AddTaskBar

const styles = StyleSheet.create({
    view: {
        backgroundColor: colors.secondary,
        height: 80
    },
    button: {
        backgroundColor: 'green',
    },
})