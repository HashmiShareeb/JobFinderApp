import { Box, HStack, ScrollView, VStack } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import Welcome from "../../components/Welcome";
import PopulairJobs from "../../components/PopulairJobs";
import AvaliableJobs from "../../components/AvaliableJobs";
import { DarkTheme } from "@react-navigation/native";
import theme from "../../styles/theme";

export default ({ navigation }: { navigation: any }) => {
  return (
    <Box style={theme.bgDark}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <VStack p={2} m={2}>
          <Welcome />
          <PopulairJobs />
          <AvaliableJobs />
        </VStack>
      </ScrollView>
    </Box>
  );
};
