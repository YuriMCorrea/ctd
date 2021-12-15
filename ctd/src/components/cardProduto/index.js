import React from "react";
import {View, Text, Image} from "react-native"
import {styles } from "./style";

function CardProduto({item}) {

  return (
    <>
      <View style={styles.container}>
            <>
              {/* Imagem produto */}
              <View>
                <Image style={styles.imagemApi} source={{uri: item?.fotoLink}} />
              </View>
              {/* View pro id, nome, categoria e descrição */}
            <View>
                {/* View pro id, nome e categoria ficarem do lado */}
                <View style={styles.idNomeCategoria}>
                  <View style={styles.id}>
                    <Text> ID: {item?.produto.id} </Text>
                  </View>
                  <View style={styles.nome}>
                    <Text> Nome: {item?.nome} </Text>
                  </View>
                  <View style={styles.categoria}>
                    <Text> Categoria: {item?.nomeCategoria} </Text>
                  </View>
                </View> 
                {/* View da descrição */}
                <View style={styles.descricao}>
                    <Text> Descrição: {item?.descricao} </Text>
                </View>
            </View>
            {/* View da quantidade em estoque, data de fabricação e valor */}
            <View>
                <View style={styles.quantidade}>
                    <Text> Qtd: {item?.qtdEstoque} </Text>
                </View>
                <View style={styles.data}>
                    <Text> Dt.Fabr: {item?.dataFabricacao} </Text>
                </View>
                <View style={styles.valor}>
                    <Text> Valor: {item?.valor} </Text>
                </View>
            </View>
            {/* View dos botões deletar e atualizar */}
            <View>
                <Image style={styles.imagens} source={require("../../../assets/lapis.png")} />
                <Image style={styles.imagens} source={require("../../../assets/lixeira.png")} />
            </View>
            </>
      </View>
    </>
  );
}

export default CardProduto;