import {
  Image,
  VStack,
  Text,
  HStack,
  Box,
  Button,
  ScrollView,
} from "native-base";
import * as React from "react";
import theme from "../../styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import jobsData from "../../assets/data/jobs.json";
import CheckImage from "../../Utilities/CheckImage";
import { Scroll } from "lucide-react-native";

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
      <Box backgroundColor={"gray.600"} width={100} m={8} borderRadius={8}>
        <Image
          mx={"auto"}
          width={60}
          height={100}
          source={{
            uri: CheckImage(job.logo)
              ? job.logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          alt="Job Image"
          resizeMode="contain"
        />
      </Box>
      <Text
        style={theme.textWhite}
        fontWeight="bold"
        fontSize="2xl"
        marginBottom={2}
        textAlign={"center"}
      >
        {job.title}
      </Text>
      <HStack space={2} alignItems={"center"}>
        <Text fontSize="md" marginBottom={2} style={theme.textWhite}>
          {job.company_name}
        </Text>
        <Text fontSize="md" marginBottom={2} style={theme.textWhite}>
          {job.location}
        </Text>
      </HStack>
      <ScrollView>
        <VStack
          padding={4}
          mt={5}
          borderTopColor={"gray.400"}
          borderTopWidth={1}
        >
          <Text
            fontSize="md"
            fontWeight={"bold"}
            textTransform={"capitalize"}
            style={theme.textWhite}
          >
            description
          </Text>
          <Text fontSize="md" style={theme.textWhite}>
            {job.details}
          </Text>
          <Text
            fontSize="md"
            fontWeight={"bold"}
            textTransform={"capitalize"}
            style={theme.textWhite}
            mt={4}
          >
            requirements
          </Text>
          <Text fontSize="md" style={theme.textWhite}>
            {job.applicationRequirements}
          </Text>
        </VStack>
      </ScrollView>

      <Box
        flexDirection={"row"}
        alignItems={"center"}
        mb={1}
        p={2}
        justifyContent={"space-evenly"}
      >
        <Button bgColor={"orange.600"} width="70%" mx={4} onPress={handleApply}>
          Apply Now
        </Button>
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
