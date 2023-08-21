import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./navigation/MainNavigation";
import { NativeBaseProvider } from "native-base";
import theme from "./styles/theme";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <MainNavigation />
    </NativeBaseProvider>
  );
}
