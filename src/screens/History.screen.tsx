import React from "react";
import { ScrollView } from "react-native";
import { useAppContext } from "../App.provider";
import { MoodItemRow } from "../components/MoodItemRow";
const History = () => {
  const { moodList } = useAppContext();
  return (
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