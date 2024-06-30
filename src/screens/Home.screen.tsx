import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { MoodPicker } from "../components/MoodPicker";
import { MoodOptionType, moodOptionWithTimestamp } from "../types";
import { MoodItemRow } from "../components/MoodItemRow";
import { useAppContext } from "../App.provider";
import { HomeIcon } from "../components/Icons";

const imageSrc = require('../../assets/butterflies.png')
const imageUrl =
    'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';
const Home = () => {
    const { handleSelectMood, moodList } = useAppContext();
    return (
        <View style={styles.container}>
            

            <Image source={{ uri: imageUrl }} style={{ flex: 1 }} />
            <View style={[StyleSheet.absoluteFill, {
                justifyContent: 'center',

            }]}>
                <MoodPicker handleSelectMood={handleSelectMood} />

            </View>

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