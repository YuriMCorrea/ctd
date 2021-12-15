import { StatusBar } from 'expo-status-bar';
import EStyleSheet from 'react-native-extended-stylesheet';
import React from 'react';
import { View } from 'react-native';
import Listar from "./src/screens/Listar"
import { styles } from './src/global/styles';
import Header from './src/components/Header';
import Formulario from './src/screens/Formulario';

EStyleSheet.build()

export default function App() {
  return (
          <>
            {/* <StatusBar style="auto" /> */}

            <View style={styles.container}>
            <Formulario /> 
              <Header />
              <Listar />

              

            </View>
          </>
  );
};
