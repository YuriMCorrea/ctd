import React, { useState } from "react";
import { styles } from "../../global/styles";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import api from "../../services";
import CardProduto from "../../components/CardProduto";
import EStyleSheet from "react-native-extended-stylesheet";

function GetById() {
  const [produto, setProduto] = useState({});
  const [search, setSearch] = useState("");

  function deleteProduto(id) {
    api
      .delete(`/produto/${id}`)
      .then(alert("Produto deletado"))
      .catch((err) => {
        console.error("Ops ocorreu um erro" + err);
      });
    const novoArray = produtos.filter((produtoDeletado) => {
      return produtoDeletado.id != id;
    });

    setProduto(novoArray);
    setSearch("");
  }

  function filtrarProdutosPorId(id) {
    api
      .get(`/produto/${id}`)
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("Ops ocorreu um erro" + err);
      });
  }

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          placeholder="Buscar por produto por Nome"
          value={search.toString()}
          onChange={(e) => setSearch(e.nativeEvent.text)}
        />
        <TouchableOpacity
          onPress={() => filtrarProdutosPorId(search)}
        >
          <Text style={styleses.btn}>Filtrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ padding: "5%", fontWeight: "bold", textAlign: "center" }}>
        Favor digitar o número do id do produto na busca para filtrar os
        produtos por ID.
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

export default GetById;

const styleses = EStyleSheet.create({
  btn: {
    height: "3rem",
    width: "33%",
    backgroundColor: "lightgrey",
    color: "black",
    fontSize: "1rem",
    fontWeight: "bold",
    textAlign: "center",
    padding: "0.5rem",
    marginLeft: "33%",
    marginTop: "1rem",
  },
});
