import React, { useEffect, useState } from "react";
import { View, Text, AppRegistry, FlatList} from "react-native";
import api from "../../services";
import FormularioProduto from "../../components/FormularioProduto/index";


function AtualizarProduto() {
  const [produto, setProduto] = useState({});
  
    useEffect(() => {
      api
        .get("/produto/")
        .then((response) => setProduto(response.data))
        .catch((err) => {
          alert(`Ops ocorreu um erro ${err}`);
        });
    }, []);

    function atualizarProduto(e) {
          api.put(`produto/${parametros.id}`, params).then((res) => {
            alert('Produto Atualizado com Sucesso');
        }).catch((err) => {
            console.log(parametros.id);
            alert("Erro ao atualizar produto!")
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

// async function atualizarProduto(e) {
//   e.preventDefault();
//   const params = {
//       nome: novoProduto,
//       descricao: novoDescricao,
//       qtdEstoque: novoQtdEstoque,
//       valor: novoValor,
//       idCategoria: novoIdCategoria,
//       nomeCategoria: novoNomeCategoria,
//       idFuncionario: novoIdFuncionario,
//       dataFabricacao: new Date(novoDataFabricacao).toISOString().split('.')[0] + 'Z',
//       fotoLink: novoImagemProduto
//       };
//       console.log(parametros.id)

      
//       await api.put(`produto/${parametros.id}`, params).then((res) => {
//           alert('Produto Atualizado com Sucesso');
//       }).catch((err) => {
//           console.log(parametros.id);
//           alert("Erro ao atualizar produto!")
//       })  
//   }

// function deleteProduto(id) {
//   const response = api.delete(`/produto/${id}`).then(function (response) {
//     alert(`${response}`);
//   });
// }