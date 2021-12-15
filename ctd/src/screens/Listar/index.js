import React, { useEffect, useState } from "react";
import { styles } from "../../global/styles";
import { View, Text, AppRegistry, FlatList} from "react-native";
import api from "../../services";
import CardProduto from "../../components/cardProduto"

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


  // function deleteProduto(id) {
  //   const response = api.delete(`/produto/${id}`).then(function (response) {
  //     alert(`${response}`);
  //   });
  // }
  return (
    <>
      <FlatList
        data={produtos}
        keyExtractor={(produtos) => {
          produtos?.id;
        }} //ALGO UNICO NO SEU ARRAY
        renderItem={({ produtos }) => <CardProduto />}
      />
    </>
  );
}

export default Listar;
