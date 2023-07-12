import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DetailStack from "./DetailStack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Logo from "../../components/Logo";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Overview"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => <Logo />,
        }}
        component={HomeScreen}
      />
      <Stack.Screen name="Details" component={DetailStack} />
    </Stack.Navigator>
  );
};
