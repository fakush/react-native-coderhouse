import React from 'react'
import TaksListScreen from './TaksListScreen'
import taskList from '../taskList'

const MainScreen = () => {
    return (
        <TaksListScreen taskList={taskList} />
    )
}

export default MainScreen   