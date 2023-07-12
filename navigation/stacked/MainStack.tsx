import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import Logo from "../../components/Logo";
import DetailsScreen from "../screens/DetailsScreen";

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
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: true,
          headerTitle: "Detail",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};
