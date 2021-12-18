import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ImgProd from "../../../assets/amostraImg.png";
import Editar from "../../../assets/lapis.png";
import Deletar from "../../../assets/lixeira.png";
import api from "../../services";

function CardProduto({
  id,
  nome,
  descricao,
  valor,
  qtdEstoque,
  nomeCategoria,
  dataFabricacao,
  funcaoDeletar,
}) {
  const [key, setKey] = useState()

  useEffect(() => {
    setKey(id);
  }, []);

  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView idCard={key} style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.idImg}>
            {/* Imagem produto */}
            <View styles={styles.viewImagem}>
              <Image
                style={styles.fotoLink}
                source={ImgProd}
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
                <View style={{paddingRight: 10}}>
                <TouchableOpacity
                  onPress={() => {
                    funcaoDeletar(id);
                    
                  }}
                >
                  <View style={styles.imagens}>
                    <Image
                      source={Deletar}
                    />
                  </View>
                </TouchableOpacity>
                </View>


                <View style={styles.imagens2}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AtualizarProduto', {idPoduto: key})}
                >
                    <Image
                      source={Editar}
                    />
                </TouchableOpacity>
                  </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default CardProduto;