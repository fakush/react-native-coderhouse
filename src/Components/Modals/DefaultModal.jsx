import { StyleSheet, Text, View, Modal } from 'react-native'
import { IconButton, DefaultButton } from '../Buttons'
import React from 'react'
import globalStyles from '../../globalStyles'

const DefaultModal = ({ title, body }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <IconButton icon='close' onPress={() => setModalVisible(!modalVisible)} />
            <Text>{{ title }}</Text>
            <Text>{{ body }}</Text>
            <View style={styles.buttonRow}>
                <DefaultButton text='Aceptar' onPress={() => setModalVisible(!modalVisible)} />
                <DefaultButton text='Cancelar' onPress={() => setModalVisible(!modalVisible)} />
            </View>
        </Modal>
    )
}

export default DefaultModal

const styles = StyleSheet.create({
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: globalStyles.borderRadius.medium,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: globalStyles.shadowOffset.height,
        },
        shadowOpacity: globalStyles.shadowOpacity,
        shadowRadius: globalStyles.shadowRadius,
        elevation: globalStyles.elevation,
    },
})