import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./style";
import InputData from "./InputData";



EStyleSheet.build()

export default function Formulario() {
    return(
        <View style={styles.container}>
            <View style={styles.containerTema}>
                <Text style={styles.nomeTema}>TEXTO </Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.nomeItem}>Nome</Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Digite o nome do produto" 
                />         
                <Text style={styles.nomeItem}>Descrição</Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Digite a descrição do produto"
                />
                <Text style={styles.nomeItem}>Quantidade em Estoque</Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={styles.textInput} 
                    placeholder="Quantidade em estoque"
                />         
                <Text style={styles.nomeItem}>Valor</Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={styles.textInput} 
                    placeholder="Digite o valor"
                />
                <Text style={styles.nomeItem}>Id Categoria</Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={styles.textInput} 
                    placeholder="Digite o Id da categoria"
                />          
                <Text style={styles.nomeItem}>Nome Categoria</Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Digite o nome da categoria"
                />           
                <Text style={styles.nomeItem}>Id Funcionario</Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={styles.textInput} 
                    placeholder="Digite o Id do funcionário"
                />           
                <Text style={styles.nomeItem}>Imagem do Produto</Text>
                <TextInput 
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