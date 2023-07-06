import {  View } from 'react-native'
import React, { useState } from 'react'
import globalStyles from '../globalStyles'
import AddTaskBar from '../Components/AddTaskBar'
import TasksListContainer from '../Components/TasksList/TaskListContainer'

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

    const onTaskCompleted = (task) => {
        const newList = list.map(item => {
            if (item.id === task.id) {
                return {
                    ...item,
                    completed: true
                }
            }
            return item
        })
        setList(newList)
    }

    const onTaskDeleted = (task) => {
        const newList = list.filter(item => item.id !== task.id)
        setList(newList)
    }

    return (
        <View styles={globalStyles.appContainer}>
            <AddTaskBar input={input} onAddTask={onAddTask} setInput={setInput} />
            <TasksListContainer list={list} onTaskCompleted={onTaskCompleted} onTaskDeleted={onTaskDeleted} />
        </View>
    )
}

export default TaksListScreen