import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import Logo from "../../components/topbar/Logo";
import DetailsScreen from "../screens/DetailsScreen";
import Search from "../../components/topbar/Search";
import SettingsStack from "./SettingsStack";

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
          //define navigation prop
          headerRight: () => <Search />,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: true,
          headerTitle: "Detail",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="settings"
        component={SettingsStack}
        options={{
          headerShown: true,
          headerTitle: "Settings",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};
