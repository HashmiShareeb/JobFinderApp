import { Box, HStack, ScrollView, VStack } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import Welcome from "../../components/Welcome";
import PopulairJobs from "../../components/PopulairJobs";

export default ({ navigation }: { navigation: any }) => {
  return (
    <Box safeArea>
      <ScrollView>
        <VStack p={2} m={4}>
          <Welcome />
          <PopulairJobs />
          <Text onPress={() => navigation.navigate("Details")}>Details</Text>
        </VStack>
      </ScrollView>
    </Box>
  );
};
