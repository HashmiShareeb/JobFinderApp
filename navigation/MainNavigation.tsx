import * as React from "react";
import { View, Text } from "react-native";

// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// screens
import SettingsScreen from "./screens/SettingsScreen";
import SearchScreen from "./screens/SearchScreen";
import HomeScreen from "./screens/HomeScreen";
import DetailStack from "./stacked/DetailStack";
import { Header, createStackNavigator } from "@react-navigation/stack";
import MainStack from "./stacked/MainStack";

const homeName = "Home";
const settingsName = "Settings";
const searchName = "Search";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = "";
            if (route.name === homeName) {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === settingsName) {
              iconName = focused ? "ios-settings" : "ios-settings-outline";
            } else if (route.name === searchName) {
              iconName = focused ? "ios-search" : "ios-search-outline";
            }

            // Add a fallback value in case iconName is empty or undefined
            iconName = iconName || "default-icon";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          labelStyle: {
            paddingBottom: 10,
          },
        }}
      >
        <Tab.Screen
          name={homeName}
          options={{ headerShown: false }}
          component={MainStack}
        />
        <Tab.Screen name={searchName} component={SearchScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
