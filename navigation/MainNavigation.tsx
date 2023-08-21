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
import BookmarksScreen from "./screens/BookmarksScreen";

const homeName = "Home";
const searchName = "Search";
const savedName = "Bookmarks";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarInactiveTintColor: "white", //inactive icon color
          tabBarActiveTintColor: "tomato", //active icon color
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#28272C",
          },
          tabBarShowLabel: false, //hide the labels in the bottom tab bar
          tabBarStyle: {
            //set the background color for the tab bar
            backgroundColor: "#28272C",
            borderTopWidth: 0,
          },
          labelStyle: {
            paddingBottom: 10,
          },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = "";
            if (route.name === homeName) {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === searchName) {
              iconName = focused ? "ios-search" : "ios-search-outline";
            } else if (route.name === "Bookmarks") {
              iconName = focused ? "ios-bookmark" : "ios-bookmark-outline";
            }

            // Add a fallback value in case iconName is empty or undefined
            iconName = iconName || "default-icon";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name={homeName}
          options={{ headerShown: false }}
          component={MainStack}
        />
        {/* <Tab.Screen name={searchName} component={SearchScreen} /> */}
        {/* <Tab.Screen name={settingsName} component={SettingsScreen} /> */}
        <Tab.Screen name={savedName} component={BookmarksScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
