import React from "react";
import { createContext } from "react";
import { MoodOptionType, moodOptionWithTimestamp } from "./types";
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
        setMoodList((current) => [...current, { mood: selectedMood, timestamp: Date.now() }]);
    }, []);

    return (
        <AppContext.Provider value={{ moodList, handleSelectMood }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => React.useContext(AppContext);