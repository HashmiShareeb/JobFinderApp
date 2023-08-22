import { Box, VStack, Text } from "native-base";
import react from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SettingsScreen from "../../navigation/screens/SettingsScreen";
import SettingsStack from "../../navigation/stacked/SearchStack";

export default () => {
  const navigation = useNavigation();
  return (
    //navigate to settingsscreen on press
    //use touchableopacity to make the icon
    //@ts-ignore
    <TouchableOpacity onPress={() => navigation.navigate("settings")}>
      <VStack>
        <Box mx={5}>
          <Ionicons name="ios-search" size={24} color="orange" />
        </Box>
      </VStack>
    </TouchableOpacity>
  );
};
