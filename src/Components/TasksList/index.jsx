import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import globalStyles from '../../globalStyles'
import RenderItemTask from './RenderItemTask'


const TasksList = ({list}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [taskActive, setTaskActive] = useState({})

  const onPressTask = (task) => {
    setTaskActive(task)
    setModalVisible(!modalVisible)
  }

  return (
    <View style={[globalStyles.appContainer]}>
      <FlatList data={list} keyExtractor={(task) => task.id} renderItem={({item}) => RenderItemTask({item, onPressTask})} />
    </View>
  )
}

export default TasksList

const styles = StyleSheet.create({})