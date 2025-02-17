import React from 'react';
import { View, Text, StyleSheet, Pressable ,LayoutAnimation} from 'react-native';
import { format } from "date-fns";
import { moodOptionWithTimestamp } from '../types';
import { theme } from '../Theme';
import { useAppContext } from '../App.provider';

type MoodItemRowProps = {
  item: moodOptionWithTimestamp,
};

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  const appContext = useAppContext();
  
  const handleDelete = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    appContext.handleDeleteMood(item);
}

return (
  <View style={styles.moodItem}>
    <View style={styles.iconAndDescription}>
      <Text style={styles.moodValue}>{item.mood.emoji}</Text>
      <Text style={styles.moodDescription}>{item.mood.description}</Text>
    </View>
    <Text style={styles.moodDate}>
      {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
    </Text>
    <Pressable onPress={handleDelete}>
      <Text style={styles.deleteText}>Delete</Text>
    </Pressable>
  </View>
);
};

const styles = StyleSheet.create({
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
  },
  moodDate: {
    textAlign: 'center',
    color: theme.colorLavender,
  },
  moodItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodDescription: {
    fontSize: 18,
    color: theme.colorPurple,
    fontWeight: 'bold',
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});