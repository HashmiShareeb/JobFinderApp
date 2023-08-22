import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import Logo from "../../components/topbar/Logo";
import DetailsScreen from "../screens/DetailsScreen";
import Search from "../../components/topbar/Search";
import SettingsStack from "./SearchStack";
import SearchStack from "./SearchStack";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Overview"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#1D1D1D",
          },
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
          headerTintColor: "white",
          headerShown: true,
          headerTitle: "Detail",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#1D1D1D",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="search"
        component={SearchStack}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#1D1D1D",
          },
          headerTitleStyle: {
            color: "white",
          },
          headerTintColor: "white",
          headerTitle: "Search",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};
