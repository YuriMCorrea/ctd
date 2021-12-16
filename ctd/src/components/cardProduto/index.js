import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import Listar from "../../screens/Listar";
import { SafeAreaView } from "react-native";

function CardProduto({
  id,
  nome,
  descricao,
  valor,
  qtdEstoque,
  nomeCategoria,
  dataFabricacao,
  fotoLink,
}) {
  function deleteProduto(id) {
    const response = api.delete(`/produto/${id}`).then(function (response) {
      alert(`${response}`);
    });
  }

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.idImg}>
          {/* Imagem produto */}
          <View styles={styles.viewImagem}>
            <Image
              style={styles.fotoLink}
              source={require("../../../assets/amostraImg.png")}
            />
          </View>
          <View style={styles.id}>
            <Text style={styles.letraId}> {id} </Text>
          </View>
          </View>
          {/* View pro id, nome, categoria e descrição */}
          <View style={styles.idDescricao}>
            {/* View pro id, nome e categoria ficarem do lado */}
            <View style={styles.idNomeCategoria}>
              <View style={styles.nome}>
                <Text style={styles.letrasNome}> Nome: {nome} </Text>
              </View>
              <View style={styles.categoria}>
                <Text style={styles.letras}> {nomeCategoria} </Text>
              </View>
            </View>
            {/* View da quantidade em estoque, data de fabricação e valor */}
            <View style={styles.qtdDtValor}>
              <View style={styles.quantidade}>
                <Text style={styles.letras}> Qtd: {qtdEstoque} </Text>
              </View>
              <View style={styles.data}>
                <Text style={styles.letras}> Dt.Fabr: {dataFabricacao} </Text>
              </View>
              <View style={styles.valor}>
                <Text style={styles.letras}> Valor: {valor} </Text>
              </View>
            </View>
          </View>
          <View style={styles.descImagem}>
            {/* View da descrição */}
            <View style={styles.descricao}>
              <Text style={styles.letras}> Descrição: {descricao} </Text>
              {/* View dos botões deletar e atualizar */}
              <View style={styles.imagensView}>
                <TouchableOpacity
                  onPress={() => {
                    deleteProduto(id);
                  }}
                >
                  <Image
                    style={styles.imagens}
                    source={require("../../../assets/lapis.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.imagens}
                    source={require("../../../assets/lixeira.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default CardProduto;
