import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import globalStyles, {colors} from '../globalStyles'
import DefaultButton from './Buttons/DefaultButton'
const AddTaskBar = ({ input, onAddTask, setInput }) => {
    return (
        <View style={[globalStyles.rowContainer, styles.view]}>
            <TextInput
                style={globalStyles.input}
                placeholder="Add Task"
                onChangeText={setInput}
                value={input}
            />
            <DefaultButton icon={'add_circle_outline'} color={colors.dark} onPress={onAddTask} text={'Add'} />
            {/* <Pressable
                style={[globalStyles.button, styles.button]}
                onPress={onAddTask}
            >
                <Text style={globalStyles.buttonText}>Add</Text>
            </Pressable> */}
        </View>
    )
}

export default AddTaskBar

const styles = StyleSheet.create({
    view: {
        backgroundColor: colors.secondary,
    },
    button: {
        backgroundColor: 'green',
    },
})