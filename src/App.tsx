import React from "react";
import { Text, View,StyleSheet } from "react-native";
import Home from "./screens/Home.screen";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabsNavigator } from "./screens/BottomTabs.navigator";

const App = () => {
  return (
   <NavigationContainer>
    <BottomTabsNavigator/>

   </NavigationContainer>
  )
}

export default App;