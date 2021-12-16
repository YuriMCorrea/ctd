import React, { useEffect, useState } from "react";
import { styles } from "../../global/styles";
import { View, Text, AppRegistry, FlatList } from "react-native";
import api from "../../services/index";
import CardProduto from "../../components/cardProduto";

function Listar() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api
      .get("/produto/")
      .then((response) => setProdutos(response.data))
      .catch((err) => {
        console.error("Ops ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <FlatList
        data={produtos}
        keyExtractor={(item) => {
          item.id;
        }} //ALGO UNICO NO SEU ARRAY
        renderItem={({ item }) => (
          <CardProduto
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

export default Listar;
