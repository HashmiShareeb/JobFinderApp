import { Box, VStack, Text } from "native-base";
import react from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SettingsScreen from "../../navigation/screens/SettingsScreen";
import SettingsStack from "../../navigation/stacked/SettingsStack";

export default () => {
  const navigation = useNavigation();
  return (
    //navigate to settingsscreen on press
    //use touchableopacity to make the icon clickable
    <TouchableOpacity onPress={() => navigation.navigate("settings")}>
      <VStack>
        <Box mx={5}>
          <Ionicons name="ios-settings" size={24} color="black" />
        </Box>
      </VStack>
    </TouchableOpacity>
  );
};
