import React ,{ useState, useEffect } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./style";
import InputData from "../InputData/index";


EStyleSheet.build()

export default function FormularioProduto({ registrarProduto, editProduto }) {
    
    // useEffect(() => {
    //     editProduto === null ? null : setNovoProduto(editProduto);
    // }, [])

    editProduto ? setNovoProduto(editProduto) : null

    /* ESTADOS DOS PRODUTOS  */
    const [data, setData] = useState(new Date());
    const [novoProduto, setNovoProduto] = useState({
        nome: "",
        descricao: "",
        qtdEstoque: 0,
        valor: 0,
        idCategoria: 0,
        nomeCategoria: "",
        idFuncionario: 0,
        nomeFuncionario: "",
        dataFabricacao: "",
        fotoLink: "",
    });

    // function atualizarDataHora() {
    //     setNovoProduto({...novoProduto, dataFabricacao: {date} })
    // }
    
    console.log(novoProduto);
    return(
      <View style={styles.geral}> 
        <View style={styles.container}>
            <View style={styles.containerTema}>
                <Text style={styles.nomeTema}>Cadastrar Produto</Text>
            </View>
            <View style={styles.form}>
                {/* <Text style={styles.nomeItem}>Nome</Text> */}
                <TextInput
                    value={novoProduto?.nome}
                    onChange={(e) => {setNovoProduto({...novoProduto, nome: e.nativeEvent.text}) }}
                    style={styles.textInputNomeP} 
                    placeholder="Nome do Produto" 
                    placeholderTextColor="gray"
                />         
                {/* <Text style={styles.nomeItem}>Descrição</Text> */}
                <TextInput 
                    value={novoProduto?.descricao}
                    onChange={(e) => {setNovoProduto({...novoProduto, descricao: e.nativeEvent.text}) }}
                    style={styles.textInput2} 
                    placeholder="Digite a descrição do produto"
                    placeholderTextColor="gray"
                />
                {/* <Text style={styles.nomeItem}>Quantidade em Estoque</Text> */}
                <TextInput
                    value={novoProduto?.qtdEstoque.toString()}
                    onChange={(e) => {setNovoProduto({...novoProduto, qtdEstoque: e.nativeEvent.text}) }}
                    keyboardType={'numeric'}
                    style={styles.textInput} 
                    placeholder="Quantidade em estoque"
                    placeholderTextColor="gray"
                />         
                {/* <Text style={styles.nomeItem}>Valor</Text> */}
                <TextInput
                    value={novoProduto?.valor.toString()}
                    onChange={(e) => {setNovoProduto({...novoProduto, valor: e.nativeEvent.text}) }}
                    keyboardType={'numeric'}
                    style={styles.textInput2} 
                    placeholder="Digite o valor"
                    placeholderTextColor="gray"
                />
                {/* <Text style={styles.nomeItem}>Id Categoria</Text> */}
                <TextInput
                    value={novoProduto?.idCategoria.toString()} 
                    onChange={(e) => {setNovoProduto({...novoProduto, idCategoria: e.nativeEvent.text}) }}
                    keyboardType={'numeric'}
                    style={styles.textInput} 
                    placeholder="Digite o Id da categoria"
                    placeholderTextColor="gray"
                />          
                {/* <Text style={styles.nomeItem}>Nome Categoria</Text> */}
                <TextInput 
                    value={novoProduto?.nomeCategoria}
                    onChange={(e) => {setNovoProduto({...novoProduto, nomeCategoria: e.nativeEvent.text}) }}
                    style={styles.textInput2} 
                    placeholder="Digite o nome da categoria"
                    placeholderTextColor="gray"
                />           
                {/* <Text style={styles.nomeItem}>Id Funcionario</Text> */}
                <TextInput 
                    value={novoProduto?.idFuncionario.toString()}
                    onChange={(e) => {setNovoProduto({...novoProduto, idFuncionario: e.nativeEvent.text}) }}
                    keyboardType={'numeric'}
                    style={styles.textInput} 
                    placeholder="Digite o Id do funcionário"
                    placeholderTextColor="gray"
                />           
                {/* <Text style={styles.nomeItem}>Nome Funcionario</Text> */}
                <TextInput 
                    value={novoProduto?.nomeFuncionario}
                    onChange={(e) => {setNovoProduto({...novoProduto, nomeFuncionario: e.nativeEvent.text}) }}
                    style={styles.textInput2}
                    placeholder="Digite o nome do funcionário"
                    placeholderTextColor="gray"

                />
                {/* <Text style={styles.nomeItem}>Imagem do Produto</Text> */}
                <TextInput
                    value={novoProduto?.fotoLink}
                    onChange={(e) => {setNovoProduto({...novoProduto, fotoLink: e.nativeEvent.text}) }} 
                    style={styles.textInputLink}
                    placeholder="Insira o link da imagem"
                    placeholderTextColor="gray"
                />
                {/* Função DateTimePicker*/}
                {/* <InputData
                    setData={setData}
                    data={data}
                />    */}
            </View>
            <View style={styles.containerBotao}>
                <TouchableOpacity
                    onPress={() => registrarProduto(data, novoProduto)} 
                    style={styles.botao}>                   
                    <Text style={styles.textoBotao}>CADASTRE</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>     
    )

}