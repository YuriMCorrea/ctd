import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Listar  from "../screens/Listar";
//import { Home } from "../screens/home"
//import Formulario from "../screens/Formulario/index"


const Stack = createStackNavigator();
export const Routes = () =>{
    return(
        <Stack.Navigator screenOptions={{ headerTransparent: true, headerShown: false }}>
            <Stack.Screen name="Listar" component={Listar} />
            {/* <Stack.Screen name="Home" component={Home} /> */}
        </Stack.Navigator>
    )
}
