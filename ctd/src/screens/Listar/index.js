import React, { useEffect, useState } from 'react';
import { styles } from '../../global/styles';
import { View, Text, AppRegistry } from 'react-native';
import api from '../../services';

function Listar(){
    const [produtos, setProdutos]= useState([]);

    useEffect(()=> { 
       api.get("/produto/").then((response)=>setProdutos(response.data)).catch((err)=>{
         console.error("Ops ocorreu um erro"+err)
       })
    }, [])
    return(
        <>
        <View style={{height:'85%', width:'1%' ,backgroundColor:'#fff'}}>

        </View>
        </>
    );
};

export default Listar;