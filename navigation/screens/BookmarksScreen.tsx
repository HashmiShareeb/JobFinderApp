import { Heading, VStack, Text } from "native-base";
import react from "react";
import theme from "../../styles/theme";
import { FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import jobsData from "../../assets/data/jobs.json";

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
            style={theme.bgDarkCard}
            key={item.id}
            //@ts-ignore
            onPress={() => navigation.navigate("Details", { job: item })}
          >
            <Text color={"white"} fontSize={20} p={5}>
              {item.title}
            </Text>
            
          </TouchableOpacity>
        )}
      />
    </VStack>
  );
};
