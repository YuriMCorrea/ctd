import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Header from "./src/components/Header";
import Routes from "./src/routes/routes";
import { NavigationContainer } from "@react-navigation/native";

EStyleSheet.build();

export default function App() {
  return (
    <>
            <NavigationContainer>
              <Header />
              <Routes />
            </NavigationContainer>
    </>
  );
}
