
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './screens/Home';
import Login from './screens/Login';
import Footer from './components/Footer';
import Profile from './screens/Profile';
import Register from './screens/Register';
import ForgetPassword from './screens/ForgetPassword';
import Camera from './screens/Camera';


const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen name='home' component={Home} options={{headerShown: false}} />
            <Stack.Screen name='login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='register' component={Register} options={{headerShown: false}}/>
            <Stack.Screen name='forgetpassword' component={ForgetPassword} />
            <Stack.Screen name='profile' component={Profile} />
            <Stack.Screen name='camera' component={Camera}/>
        </Stack.Navigator>
        <Footer />
    </NavigationContainer>
  )
}

export default Main