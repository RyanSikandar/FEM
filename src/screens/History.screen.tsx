import React from "react";
import { Text, View,StyleSheet } from "react-native";
import { useAppContext } from "../App.provider";
import { MoodItemRow } from "../components/MoodItemRow";
const History = () => {
  const {moodList} = useAppContext();
  return (
    <View>
     {
                moodList.map((item)=>(
                    <MoodItemRow item={item} key={item.timestamp} />
                ))
            }
    </View>  
  )
}



export default History;