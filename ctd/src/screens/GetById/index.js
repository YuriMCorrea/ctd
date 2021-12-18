import React, { useEffect, useState } from "react";
import { styles } from "../../global/styles";
import { View, Text, AppRegistry, FlatList, TextInput, TouchableOpacity, Image} from "react-native";
import api from "../../services";
import CardProduto from "../../components/CardProduto";
import EStyleSheet from "react-native-extended-stylesheet";



function ListarPorId() {
  const [produto, setProduto] = useState({});
  const [search, setSearch]= useState(''); 
  
  function deleteProduto(id) {
    api
    .delete(`/produto/${id}`)
    .then(alert("Produto deletado"))
    .catch((err) => {
      console.error("Ops ocorreu um erro" + err);
    });
    const novoArray = produtos.filter((produtoDeletado) => {
      return produtoDeletado.id != id;
    })

    setProduto(novoArray);
    setSearch('');

  }

  function filtrarProdutosPorId() {
    api
      .get("/produto/")
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("Ops ocorreu um erro" + err);
    })
  };



  return (
       <>

         <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
             placeholder="Buscar por produto por Nome"
             value={search}
             onChange={(e) => setSearch(e.nativeEvent.text)}
          />     
          <TouchableOpacity onPress={filtrarProdutosPorId}>
            <Text style={styleses.btn}>Filtrar</Text>
          </TouchableOpacity>
        </View>
        <Text style={{padding: '5%', fontWeight: 'bold', textAlign: 'center'}}>
          Favor digitar o número do id do produto na busca para filtrar os produtos por ID.
        </Text>

      <FlatList

        data={produto}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        renderItem={({ item }) => (
          <CardProduto
            funcaoDeletar={deleteProduto}
            id={item.id}
            nome={item.nome}
            descricao={item.descricao}
            qtdEstoque={item.qtdEstoque}
            nomeCategoria={item.nomeCategoria}
            dataFabricacao={item.dataFabricacao}
            valor={item.valor}
            fotoLink={item.fotoLink}
          />
        )}
      />
    </>
  );
}

export default ListarPorId;


const styleses = EStyleSheet.create({
  btn: {
    height:'3rem',
    width:'33%',
    backgroundColor:'lightgrey',
    color:'black',
    fontSize: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '0.5rem',
    marginLeft: '33%',
    marginTop: '1rem',
  }
})