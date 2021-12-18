import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Listar from "../screens/Listar";
import CadastrarProduto from "../screens/CadastrarProduto";
import AtualizarProduto from "../screens/AtualizarProduto";
import ListarPorId from "../screens/GetById";

const Stack = createStackNavigator();

const Routes = () =>{
    return(
        <Stack.Navigator screenOptions={{ headerTransparent: true, headerShown: false }}>
            <Stack.Screen name="Listar" component={Listar} />
            <Stack.Screen name="CadastrarProduto" component={CadastrarProduto} />
            <Stack.Screen name="AtualizarProduto" component={AtualizarProduto} />
            <Stack.Screen name="ListarPorId" component={ListarPorId} />
        </Stack.Navigator>
    )
}

export default Routes;