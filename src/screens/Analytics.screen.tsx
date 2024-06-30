import React from "react";
import { Text, View,StyleSheet } from "react-native";

export const Analytics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>select good moods on Home screen hehe</Text>
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center'
  },
    text: {
        fontSize: 20,
        color: 'white'
    }
});
