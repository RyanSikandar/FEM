import React from "react";
import { Text, View,StyleSheet } from "react-native";

const History = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>History</Text>
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

export default History;