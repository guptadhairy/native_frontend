import { View, Text, SafeAreaView, StatusBar, Platform, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Task from '../components/Task'
import Icon from "react-native-vector-icons/Entypo"
import { Button, Dialog } from 'react-native-paper'

const Home = ({navigation}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [openDialog, setOpenDialog] = useState(false);

    const hideDialog = ()=> {
        setOpenDialog(!openDialog);
    }
    const addTaskHandler = ()=> {
        console.log("Added successfully")
    }

    const tasks = [{
        title: "Task 1", description: "Sample Task", completed: false, _id: "sdfghj"
    },
    {
        title: "Task 2", description: "Sample Task2", completed: true, _id: "sdfghj12"
    },
    
];
  return (
    <>
    <ScrollView>
    <View style={{backgroundColor: "#fff", flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
      <SafeAreaView>
      <Text style={styles.heading}>All Tasks</Text>
      {
        tasks.map((item) => (
            <Task key={item._id} title={item.title} description={item.description} status={item.completed} taskId={item._id} />
        ))
      }

      <TouchableOpacity style={styles.addBtn} onPress={hideDialog}>
        <Icon name='add-to-list' size={20} color={"#900"}/>
      </TouchableOpacity>
      </SafeAreaView>
    </View>
    </ScrollView>
    <Dialog visible={openDialog} onDismiss={hideDialog}>
        <Dialog.Title>
            Add New Task
        </Dialog.Title>
        <Dialog.Content>
            <TextInput value={title} onChange={setTitle} style={styles.input} placeholder='Title' />
            <TextInput value={description} onChange={setDescription} style={styles.input} placeholder='Description'/>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <TouchableOpacity onPress={hideDialog}>
                    <Text>CANCEL</Text>
                </TouchableOpacity>
                <Button onPress={addTaskHandler} textColor='#900'>
                    ADD
                </Button>
            </View>
        </Dialog.Content>
    </Dialog>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
    heading: {
        fontSize: 28,
        textAlign: "center",
        marginTop: 25,
        color: "#fff",
        padding: 10,
        backgroundColor: "purple"
    },
    addBtn: {
        backgroundColor: "#fff",
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        alignSelf: "center",
        marginVertical: 20,
        elevation: 5
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#b5b5b5",
        padding: 10,
        paddingLeft: 15,
        borderRadius: 5,
        marginVertical: 10,
        fontSize: 15
    }
})