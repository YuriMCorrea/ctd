import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Listar from "../screens/Listar";
import CadastrarProduto from "../screens/CadastrarProduto";
import AtualizarProduto from "../screens/AtualizarProduto";



const Stack = createStackNavigator();
const Routes = () =>{
    return(
        <Stack.Navigator screenOptions={{ headerTransparent: true, headerShown: false }}>
            <Stack.Screen name="Listar" component={Listar} />
            <Stack.Screen name="CadastrarProduto" component={CadastrarProduto} />
            <Stack.Screen name="AtualizarProduto/:id+" component={AtualizarProduto} />
        </Stack.Navigator>
    )
}

export default Routes;