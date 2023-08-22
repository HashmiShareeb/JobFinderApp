import { Heading, VStack, Text, Image, Box, HStack } from "native-base";
import react from "react";
import theme from "../../styles/theme";
import { FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import jobsData from "../../assets/data/jobs.json";
import CheckImage from "../../Utilities/CheckImage";

export default () => {
  const navigation = useNavigation();

  // Filter bookmarked jobs
  const bookmarkedJobs = jobsData.filter((job) => job.isBookmarked);

  return (
    <VStack flex={1} style={theme.bgDark}>
      <FlatList
        data={bookmarkedJobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            //@ts-ignore
            onPress={() => navigation.navigate("Details", { job: item })}
          >
            <Box
              flexDirection={"row"}
              alignItems={"center"}
              borderBottomColor={"gray.400"}
              mx={5}
              borderBottomWidth={1}
            >
              <Image
                alt="company logo"
                source={{
                  uri: CheckImage(item.logo)
                    ? item.logo
                    : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
                }}
                resizeMode="contain"
                style={{ width: 60, height: 100 }}
              />
              <HStack flexDirection={"column"} mx={"auto"} mt={2}>
                <Text color={"white"} fontSize={16}>
                  {item.title}
                </Text>
                <Text color={"white"} fontSize={14}>
                  {item.company_name} - {item.type}
                </Text>
              </HStack>
            </Box>
          </TouchableOpacity>
        )}
      />
    </VStack>
  );
};
