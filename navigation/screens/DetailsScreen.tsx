import { Image, VStack, Text, HStack, Center, Icon, Box } from "native-base";
import { Button } from "react-native";
import * as React from "react";
import theme from "../../styles/theme";
import { Bookmark } from "lucide-react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import jobsData from "../../assets/data/jobs.json";

export default ({ navigation, route }: { navigation: any; route: any }) => {
  const handleApply = () => {
    // Perform action for applying to the job
  };
  const { job } = route.params;

  const [isBookmarked, setIsBookmarked] = useState(job.isBookmarked || false);

  const handleBookmark = () => {
    const updatedJob = { ...job, isBookmarked: !isBookmarked };

    // Find the index of the updated job in the jobsData array
    const jobIndex = jobsData.findIndex((item) => item.id === job.id);

    if (jobIndex !== -1) {
      // Update the job in the jobsData array
      jobsData[jobIndex] = updatedJob;

      // Update the state to reflect the change
      setIsBookmarked(!isBookmarked);
    }
  };
  return (
    <VStack flex={1} alignItems="center" style={theme.bgDark}>
      <Image
        mt={8}
        width={50}
        height={50}
        source={{
          uri: job.logo
            ? job.logo
            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
        }}
        alt="Job Image"
        resizeMode="contain"
      />

      <VStack padding={4}>
        <Text
          style={theme.textWhite}
          fontWeight="bold"
          fontSize="xl"
          marginBottom={2}
          textAlign={"center"}
        >
          {job.title}
        </Text>
        <HStack space={2} margin={"auto"} alignItems={"center"}>
          <Text fontSize="md" marginBottom={2} style={theme.textWhite}>
            {job.company_name}
          </Text>
          <Text fontSize="sm" marginBottom={2} style={theme.textWhite}>
            {job.location}
          </Text>
        </HStack>
        <Text
          fontSize="md"
          fontWeight={"bold"}
          textTransform={"capitalize"}
          style={theme.textWhite}
        >
          description
        </Text>
        <Text fontSize="md" style={theme.textWhite}>
          {job.applicationRequirements}
        </Text>
      </VStack>
      <Box
        flexDirection={"row"}
        flexBasis={"auto"}
        mx={4}
        mb={4}
        justifyContent={"space-between"}
      >
        {/* <Button title="apply" onPress={handleApply} /> */}
        <TouchableOpacity onPress={handleBookmark}>
          <Ionicons
            name={isBookmarked ? "bookmark" : "bookmark-outline"}
            size={20}
            color={"white"}
          />
        </TouchableOpacity>
      </Box>
    </VStack>
  );
};
