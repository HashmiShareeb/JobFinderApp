import { Heading, ScrollView, VStack, Image, Text } from "native-base";
import react from "react";
import { View, TouchableOpacity } from "react-native";
import jobcards from "../styles/jobcards";
import { useNavigation } from "@react-navigation/native";
import JobList from "../styles/JobList";
import jobsData from "../assets/data/jobs.json";
import theme from "../styles/theme";

export default () => {
  const navigation = useNavigation();
  const randomizedJobs = jobsData.sort(() => Math.random() - 0.5);

  return (
    <View>
      <Heading
        flexDirection={"row"}
        color={"white"}
        fontWeight={"bold"}
        fontSize={"md"}
      >
        Available Jobs
      </Heading>
      <VStack>
        <ScrollView>
          {randomizedJobs.map((job) => (
            <TouchableOpacity
              style={[JobList.container, theme.bgDarkCard]}
              key={job.id}
              //@ts-ignore
              onPress={() => navigation.navigate("Details", { job })}
            >
              <Heading
                style={theme.textWhite}
                fontWeight={"bold"}
                fontSize={16}
              >
                {job.title}
              </Heading>
              <VStack flexDirection={"row"} mt={2}>
                <Text
                  numberOfLines={1}
                  color={"white"}
                  fontWeight={"light"}
                  fontSize={14}
                >
                  {job.company_name} - {job.type}
                </Text>
              </VStack>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </VStack>
    </View>
  );
};
