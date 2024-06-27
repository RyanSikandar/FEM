import React, { useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import { MoodPicker } from "../components/MoodPicker";
import { MoodOptionType, moodOptionWithTimestamp } from "../types";
const Home = () => {
const [moodList, setMoodList] = React.useState<moodOptionWithTimestamp[]>([]);

const handleSelectMood = React.useCallback((selectedMood: MoodOptionType) => {
    setMoodList((current) => [...current, { mood:selectedMood, timestamp: Date.now() }]);
  }, []);
        
    return (
        <View style={styles.container}>
            <MoodPicker handleSelectMood ={handleSelectMood}/>
            {
                moodList.map((item)=>(
                    <Text key={item.timestamp}>
                        {item.mood.emoji} {new Date(item.timestamp).toLocaleString()}
                    </Text>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
});

export default Home;