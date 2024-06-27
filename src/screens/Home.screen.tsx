import React     from "react";
import { Text, View, StyleSheet } from "react-native";
import { MoodPicker } from "../components/MoodPicker";
import { MoodOptionType, moodOptionWithTimestamp } from "../types";
import { MoodItemRow } from "../components/MoodItemRow";
import { useAppContext } from "../App.provider";
const Home = () => {
const {handleSelectMood,moodList} = useAppContext();
    return (
        <View style={styles.container}>
            <MoodPicker handleSelectMood ={handleSelectMood}/>
           
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