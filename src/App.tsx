import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Home from "./screens/Home.screen";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabsNavigator } from "./screens/BottomTabs.navigator";
import { AppProvider } from "./App.provider";

import { Platform, UIManager } from 'react-native';
import SplashScreen from "react-native-splash-screen";

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />

      </NavigationContainer>
    </AppProvider>
  )
}

export default App;