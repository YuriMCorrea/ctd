import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native'


function Header() {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.cHeader}>
                <TouchableOpacity>
                    <Image style={styles.logo} source={require('../../../assets/ctd.png')} />
                </TouchableOpacity>
                <View style={styles.menuTotal}>
                    <Text style={styles.text}>Check The Documentation</Text>
                    <View style={styles.menu}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("Listar")}>
                                <Text style={styles.btnListar}>Listar</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("CadastrarProduto")}>
                                <Text style={styles.btnCadastrar}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("ListarPorId")}>
                                <Text style={styles.btnCadastrar}>Listar por ID</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};




export default Header;