import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button, Avatar } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/action'

const Profile = ({navigation}) => {
  const dispatch = useDispatch();

  const {user} = useSelector(state => state.auth);
  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState( user.avatar.url);

  const handleImage = ()=> {
    navigation.navigate("camera", {
      updateProfile: true
    })
  }
  const submitHandler = () =>{

  }
  const logoutHandler = () => {
    dispatch(logout());
  };
  
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Avatar.Image size={100} source={{uri: avatar ? avatar : null}} />
      <TouchableOpacity onPress={handleImage}>
        <Text style={{color: "#900", margin: 20}}>Change Image</Text>
      </TouchableOpacity>
      <View style={{width: "70%"}}>
        <TextInput style={Styles.input} placeholder='Name' value={name} onChangeText={setName} />
      </View>
      <Button style={Styles.btn} onPress={submitHandler}>
        <Text style={{color: "white"}}>Update</Text>
      </Button>
      <Button onPress={() => navigation.navigate("changepassword")}>
        Change Password
      </Button>
      <Button onPress={logoutHandler}>
        Logout
      </Button>
    </View>
  )
}

export default Profile

const Styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
},
btn: {
    backgroundColor: "#900",
    padding: 5,
    width: "70%",
},

});