import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home.screen";
import History from "./History.screen"
import Analytics from "./Analytics.screen"
import { AnalyticsIcon, HistoryIcon, HomeIcon } from "../components/Icons";
const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return <HomeIcon size={size} color={color} />
                    }
                    if (route.name === 'History') {
                        return <HistoryIcon size={size} color={color} />
                    }
                    if (route.name === 'Analytics') {
                        return <AnalyticsIcon size={size} color={color} />
                    }
                    return null;
                }
            })}
        >
            <BottomTabs.Screen name="Home" component={Home} options={{
                headerShown: false
            }} />
            <BottomTabs.Screen name="History" component={History}
                options={{
                    headerShown: false
                }}
            />
            <BottomTabs.Screen name="Analytics" component={Analytics}
                options={{
                    headerShown: false
                }} />
        </BottomTabs.Navigator>
    )

}