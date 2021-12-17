import EStyleSheet from 'react-native-extended-stylesheet';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './src/global/styles';
import AtualizarProduto from './src/screens/AtualizarProduto/index';
import CadastrarProduto from './src/screens/CadastrarProduto/index';

EStyleSheet.build()

export default function App() {
  return ( 
          <>
            {/* <StatusBar style="auto" /> */}
            <ScrollView>
              <View style={styles.container}>
                {/* <Formulario /> */}
                <CadastrarProduto />
              </View>
            </ScrollView>
          </>
  );
};
