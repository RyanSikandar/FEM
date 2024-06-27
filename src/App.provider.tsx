import React, { useEffect } from "react";
import { createContext } from "react";
import { MoodOptionType, moodOptionWithTimestamp } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AppData = {
    moodList: moodOptionWithTimestamp[],

}

const key = 'MoodTracker Data'

const setAppData = async (appData: AppData): Promise<void> => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(appData));

    }
    catch (e) {
        console.log(e);
    }

}

const getAppData = async (): Promise<AppData | null> => {
    try {
        const result = await AsyncStorage.getItem(key);
        return result ? JSON.parse(result) : null;
    }
    catch (e) {
        console.log(e);
        return null;
    }
}


type AppContextType = {
    moodList: moodOptionWithTimestamp[];
    handleSelectMood: (mood: MoodOptionType) => void;

}

type AppProviderProps = {
    children: React.ReactNode;
}

const AppContext = createContext<AppContextType>(
    {
        moodList: [],
        handleSelectMood: () => { },
    }
);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [moodList, setMoodList] = React.useState<moodOptionWithTimestamp[]>([]);

    const handleSelectMood = React.useCallback((selectedMood: MoodOptionType) => {
        setMoodList(current => {
            const newMoodList = [
                ...current,
                {
                    mood: selectedMood,
                    timestamp: Date.now(),
                }
            ];
            setAppData({ moodList: newMoodList })
            return newMoodList;
        })
    }, []);

    useEffect(() => {
        getAppData().then((data) => {
            if (data) {
                setMoodList(data.moodList);
            }
        });
    }, []);

    return (
        <AppContext.Provider value={{ moodList, handleSelectMood }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => React.useContext(AppContext);