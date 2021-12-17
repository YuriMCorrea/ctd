import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { ScrollView, View } from "react-native";
import { styles } from "./src/global/styles";
import Header from "./src/components/Header";
import Routes from "./src/routes/routes";
import { NavigationContainer } from "@react-navigation/native";

EStyleSheet.build();

export default function App() {
  return (
    <>
      {/* <StatusBar style="auto" /> */}
          {/* <View style={styles.container}> */}
      
            <NavigationContainer>
              <Header />
              <Routes />
            </NavigationContainer>

          {/* </View> */}
    </>
  );
}
