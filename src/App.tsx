import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Home from "./screens/Home.screen";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabsNavigator } from "./screens/BottomTabs.navigator";
import { AppProvider } from "./App.provider";

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />

      </NavigationContainer>
    </AppProvider>
  )
}

export default App;