import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../Global/colors'
import TaskListItem from './TaskListItem'
import DefaultModal from '../Modals/DefaultModal'


const TasksListContainer = ({ list, onTaskCompleted, onTaskDeleted }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [taskActive, setTaskActive] = useState({})

  const onPressTask = (task) => {
    setTaskActive(task)
    setModalVisible(true)
  }

  const onTaskComplete = (task) => {
    onTaskCompleted(task)
    setModalVisible(false)
  }

  const onTaskDelete = (task) => {
    onTaskDeleted(task)
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <FlatList data={list} keyExtractor={(task) => task.id} renderItem={({item}) => TaskListItem({item, onPressTask, onTaskComplete, onTaskDelete})} />
      <DefaultModal 
        title={'Completar Tarea'} 
        body={`¿Estás seguro que deseas completar la tarea: "${taskActive.task}?"`} 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} 
        onAccept={() => onTaskComplete(taskActive)} 
        onCancel={() => setModalVisible(false)} />
    </View>
  )
}

export default TasksListContainer

const styles = StyleSheet.create({
  container: {
    height: "90%",
    backgroundColor: colors.secondary,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  }
})