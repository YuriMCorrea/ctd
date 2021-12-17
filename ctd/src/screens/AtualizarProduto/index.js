import React, { useEffect, useState } from "react";
import { View } from "react-native";
import api from "../../services";
import FormularioProduto from "../../components/FormularioProduto/index";
import { useNavigation, route } from "@react-navigation/native";


function AtualizarProduto() {
  const [produto, setProduto] = useState({});
  const idProduto = route.params;
  
    useEffect(() => {
      api
        .get(`/produto/${idProduto}`)
        .then((response) => setProduto(response.data))
        .catch((err) => {
          alert(`Ops ocorreu um erro ${err}`);
        });
    }, []);

    function atualizarProduto(e) {
          api.put(`produto/${produto.id}`, produto).then((res) => {
            alert('Produto Atualizado com Sucesso');
        }).catch((err) => {
            console.log(parametros.id);
            alert("Erro ao atualizar produto!" + err)
        })  
    }
    
    return (
    <>
      <View>
        <FormularioProduto 
          funcao={atualizarProduto}
          editProduto={produto}
        />
      </View>
    </>
  );
}

export default AtualizarProduto;
