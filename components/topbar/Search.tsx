import { Box, VStack, Text } from "native-base";
import react from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  return (
    //@ts-ignore
    <TouchableOpacity onPress={() => navigation.navigate("search")}>
      <VStack>
        <Box mx={5}>
          <Ionicons name="ios-search" size={24} color={"tomato"} />
        </Box>
      </VStack>
    </TouchableOpacity>
  );
};
