import {  View } from 'react-native'
import React, { useState } from 'react'
import globalStyles from '../globalStyles'
import AddTaskBar from '../Components/AddTaskBar'
import TasksList from '../Components/TasksList'

const TaksListScreen = ({ taskList }) => {
    const [list, setList] = useState(taskList)
    const [input, setInput] = useState("")

    const onAddTask = () => {
        setList([
            ...list,
            {
                id: (Date.now() + list.length).toString(),
                task: input,
                completed: false
            }
        ])
    }
    return (
        <View styles={globalStyles.appContainer}>
            <AddTaskBar input={input} onAddTask={onAddTask} setInput={setInput} />
            <TasksList list={list} />
        </View>
    )
}

export default TaksListScreen