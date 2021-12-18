import React, { useEffect, useState } from "react";
import { styles } from "../../global/styles";
import { View, Text, AppRegistry, FlatList, TextInput, TouchableOpacity, Image} from "react-native";
import api from "../../services";
import CardProduto from "../../components/CardProduto";



function ListarPorId() {
  const [produtos, setProdutos] = useState([]);
  const [produto, setProduto] = useState(produtos);
  const [search, setSearch]= useState(''); 
  
  useEffect(() => {
    api
      .get("/produto/")
      .then((response) => setProdutos(response.data))
      .catch((err) => {
        console.error("Ops ocorreu um erro" + err);
      });
  }, []);

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


  return (
       <>

         <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
             placeholder="Buscar por produto por Nome"
             value={search}
             onChange={(e) => setSearch(e.nativeEvent.text)}
          />     
        </View>
        <Text style={{padding: '5%', fontWeight: 'bold', textAlign: 'center'}}>
          Favor digitar um texto na busca para filtrar os produtos por nome.
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
