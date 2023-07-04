import React from "react";
import { View, Text } from "react-native";

export default ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text onPress={() => navigation.navigate("Details")}>Home Screen</Text>
    </View>
  );
};
