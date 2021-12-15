import React, {useState} from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./style";
import InputData from "./InputData";



EStyleSheet.build()

export default function Formulario() {

    const [produto, setProduto] = useState([ 
        {Nome:          '',
        descricao:      '',
        QtdEstoque:     '', 
        Valor:          '', 
        IdCategoria:    '', 
        NomeCategoria:  '', 
        IdFuncionario:  '', 
        ImagemProduto:  '', 
        DataFabricacao: ''}]);
 

    async function cadastrarProduto(e) {
        e.preventDefault();

         

         try {
         await api.post(`produto`, params);
           alert('Produto Cadastrado com Sucesso');
        }catch (error) {
            console.log(params);
            alert("Erro ao cadastrar produto!", error)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerTema}>
                <Text style={styles.nomeTema}>TEXTO </Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.nomeItem}>Nome</Text>
                <TextInput 
                    value={produto?.nome}
                    onChange={e => setProduto({...produto,nome: e.target.value})}
                    style={styles.textInput} 
                    placeholder="Digite o nome do produto"
                />         
                <Text style={styles.nomeItem}>Descrição</Text>
                <TextInput 
                    value={produto?.descricao} 
                    onChange={e => setProduto({...produto,descricao: e.target.value})}
                    style={styles.textInput} 
                    placeholder="Digite a descrição do produto"
                />
                <Text style={styles.nomeItem}>Quantidade em Estoque</Text>
                <TextInput
                    value={produto?.QtdEstoque} 
                    onChange={e => setProduto({...produto,QtdEstoque: e.target.value})}
                    keyboardType={'numeric'}
                    style={styles.textInput} 
                    placeholder="Quantidade em estoque"
                />         
                <Text style={styles.nomeItem}>Valor</Text>
                <TextInput 
                    value={produto?.Valor} 
                    onChange={e => setProduto({...produto,Valor: e.target.value})}
                    keyboardType={'numeric'}
                    style={styles.textInput} 
                    placeholder="Digite o valor"
                />
                <Text style={styles.nomeItem}>Id Categoria</Text>
                <TextInput 
                    value={produto?.IdCategoria} 
                    onChange={e => setProduto({...produto,IdCategoria: e.target.value})}
                    keyboardType={'numeric'}
                    style={styles.textInput} 
                    placeholder="Digite o Id da categoria"
                />          
                <Text style={styles.nomeItem}>Nome Categoria</Text>
                <TextInput
                    value={produto?.NomeCategoria} 
                    onChange={e => setProduto({...produto,NomeCategoria: e.target.value})}
                    style={styles.textInput} 
                    placeholder="Digite o nome da categoria"
                />           
                <Text style={styles.nomeItem}>Id Funcionario</Text>
                <TextInput
                    value={produto?.IdFuncionario} 
                    onChange={e => setProduto({...produto,IdFuncionario: e.target.value})}
                    keyboardType={'numeric'}
                    style={styles.textInput} 
                    placeholder="Digite o Id do funcionário"
                />           
                <Text style={styles.nomeItem}>Imagem do Produto</Text>
                <TextInput 
                    value={produto?.ImagemProduto} 
                    onChange={e => setProduto({...produto,ImagemProduto: e.target.value})}
                    style={styles.textInput}
                    placeholder="Insira o link da imagem"
                />
                {/* Função DateTimePicker*/}
                <InputData />   
            </View>
            <View style={styles.containerBotao}>
                <TouchableOpacity style={styles.botao}>
                    <Text>APERTE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}