import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../App.provider";
import { MoodItemRow } from "../components/MoodItemRow";
const History = () => {
  const { moodList } = useAppContext();
  return (
    moodList.length === 0 ?
      <View style={{
        justifyContent: 'center',
        flex: 1,

      }}>
        <Text style={{
          textAlign: 'center',
          fontSize: 20,
        }}>Please select a mood on Home Screen</Text></View> :
      <ScrollView>
        {
          moodList.slice().reverse().map((item) => (
            <MoodItemRow item={item} key={item.timestamp} />
          ))
        }
      </ScrollView>
  )
}



export default History;