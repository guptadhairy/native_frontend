import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button } from 'react-native-paper'

const Register = ({navigation, route}) => {
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleImage = ()=> {
        navigation.navigate("camera", {
          updateProfile: false
        });
    }
    const registerHandler = () => {

    }

    useEffect(() => {
      if(route.params) {
        if(route.params.image) {
          setAvatar(route.params.image)
        }
      }
    },[route])
  return (
    <View style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    }}>
      <Avatar.Image size={100} source={{uri: avatar ? avatar : null}} style={{backgroundColor: "#900"}} />
      <TouchableOpacity onPress={handleImage}>
        <Text style={{color: "#900", marginTop: 5}}>Change Image</Text>
      </TouchableOpacity>
      <View style={{width: "70%"}}>
        <TextInput value={name} onChangeText={setName} style={Styles.input} placeholder='Name'/>
        <TextInput value={email} onChangeText={setEmail} style={Styles.input} placeholder='Email'/>
        <TextInput value={password} onChangeText={setPassword} secureTextEntry style={Styles.input} placeholder='Password'/>
      </View>
      <Button disabled={!email || !password || !name} style={Styles.btn} onPress={registerHandler} >
        <Text style={{color: "white"}}>Register</Text>
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Text style={{
            color: "#900",
            height: 30,
            margin: 20
        }}>Have an Account, Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register

const Styles = StyleSheet.create({
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#b5b5b5",
        padding: 10,
        paddingLeft: 15,
        borderRadius: 5,
        marginVertical: 10,
        fontSize: 15,
    },
    btn: {
        backgroundColor: "#900",
        padding: 5,
        width: "70%"
    }
})