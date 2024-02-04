import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/action'

const Login = ({navigation}) => {
  const {error} = useSelector(state=>state.auth)

  const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginHandler = () => {
        dispatch(login(email, password));
    }
    useEffect(()=>{
      if(error) {
        alert(error)
        dispatch({type: "clearError"})
      }
    }, [error, dispatch, alert])
  return (
    <View style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <Text style={{fontSize: 20, margin: 20}}>WELCOME</Text>
      <View style={{width: "70%"}}>
        <TextInput value={email} onChangeText={setEmail} style={Styles.input} placeholder='Email'/>
        <TextInput value={password} onChangeText={setPassword} style={Styles.input} placeholder='Password'/>
      </View>
      <Button disabled={!email || !password} style={Styles.btn} onPress={loginHandler}>
        <Text style={{color: "white"}}>Login</Text>
      </Button>
      <Text style={{marginTop: 20}}>Or</Text>
      <TouchableOpacity onPress={() => navigation.navigate("register")}>
        <Text style={{
            color: "#900", 
            margin: 10
        }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("forgetpassword")}>
        <Text>Forget Password ?</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

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
})