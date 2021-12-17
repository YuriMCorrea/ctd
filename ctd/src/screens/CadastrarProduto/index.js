import React, { useEffect, useState } from "react";
import { View } from 'react-native';
import api from "../../services/index";
import FormularioProduto from "../../components/FormularioProduto/index";

function CadastrarProduto() {
  const [produtos, setProdutos] = useState([]);

    async function cadastrarProduto(data, novoProduto) {
      const dataObject = {    
        ...novoProduto,     
        dataFabricacao: "2019-10-01T00:00:00Z",
      }
      console.log(`dataObject`, dataObject);
      try{
          const response = await api.post('/produto',dataObject);
         if(response){
           alert("Deu certo!");
         }
      }catch(error){
        console.log("Erro ao cadastrar produto ", error);
      }
    }
    
    return (
      <>
      <View>
        <FormularioProduto
          registrarProduto={cadastrarProduto}
        />
      </View>
    </>
  );
}

export default CadastrarProduto;