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

    import api from "../../services"

function deleteProduto (id){
    const response = api.delete(`/produto/${id}`)
    .then(function(response){
        alert(`${response}`);
    })
}
    return(
        <>
        
        </>
    );
};

export default Listar;

