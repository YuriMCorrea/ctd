import React, { useEffect, useState } from "react";
import { styles } from "../../global/styles";
import { View, Text, AppRegistry, FlatList, TextInput, TouchableOpacity, Image} from "react-native";
import api from "../../services";
import CardProduto from "../../components/CardProduto"

function Listar() {
  const [produtos, setProdutos] = useState([]);
  const [produto, setProduto] = useState([]);
  const [search, setSearch]= useState('');

   

useEffect(()=>{
  if(search!=''){

    setProduto(produtos.filter(res => res.nome.toLowerCase().indexOf(search.toLowerCase())>-1))
   
  }
  else{
    setProduto(produtos)
  }
},[search]);

useEffect(() => {
    api
      .get("/produto/")
      .then((response) => setProdutos(response.data))
      .catch((err) => {
        console.error("Ops ocorreu um erro" + err);
      });
  }, []);

  function filtrarProduto(search){

       setProduto(produtos.id.filter(search));
         search ? setProduto(produtos.getElementById(search)) : setProduto(produtos);
            }


  // function deleteProduto(id) {
  //   const response = api.delete(`/produto/${id}`).then(function (response) {
  //     alert(`${response}`);
  //   });
  // }
  return (
       <>

         <View style={styles.ContainerBusca}>
            <TextInput
             placeholder="Buscar por produto com ID"
             value={search}
             onChange={(e) => setSearch(e.nativeEvent.text)}
          />     
          <TouchableOpacity  onPress={()=>{filtrarProduto(search)}}>
            <Image
              style={styles.lupa}
              source={require('../../../assets/lupa.png')}
            />
            </TouchableOpacity>       
        </View>


      <FlatList
        data={produto}
        keyExtractor={(item) => item.id} //ALGO UNICO NO SEU ARRAY
        renderItem={({ item }) => <CardProduto />}
      />
    </>
  );
}

export default Listar;
