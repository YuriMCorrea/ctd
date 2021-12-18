import React, { useEffect, useState } from "react";
import { View } from "react-native";
import api from "../../services";
import FormularioProduto from "../../components/FormularioProduto/index";



function AtualizarProduto(props) {
  const [produto, setProduto] = useState({});
  const idProduto = props.route.params;
  
    useEffect(() => {
      api
        .get(`/produto/${idProduto}`)
        .then((response) => setProduto(response.data))
        .catch((err) => {
          alert(`Ops ocorreu uma trolha ${err}`);
        });
    }, []);

    function atualizarProduto(e) {
          api
          .put(`produto/${produto.id}`, produto)
          .then((res) => {
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
