import { Heading, ScrollView, VStack, Image, Text } from "native-base";
import react from "react";
import { View, TouchableOpacity } from "react-native";
import jobcards from "../styles/jobcards";
import { useNavigation } from "@react-navigation/native";
import JobList from "../styles/JobList";
import jobsData from "../assets/data/jobs.json";

export default () => {
  const navigation = useNavigation();
  const randomizedJobs = jobsData.sort(() => Math.random() - 0.5);

  return (
    <View>
      <Heading
        flexDirection={"row"}
        color={"dark.200"}
        fontWeight={"bold"}
        fontSize={"md"}
      >
        Available Jobs
      </Heading>
      <VStack>
        <ScrollView>
          {randomizedJobs.map((job) => (
            <TouchableOpacity
              style={JobList.container}
              key={job.id}
              //@ts-ignore
              onPress={() => navigation.navigate("Details", { job })}
            >
              {/* <Image
                source={{ uri: job.logo }} // Assuming "logo" property contains the image URI
                alt={job.title} // Alt text for the image
                resizeMode="contain"
                mt={8}
                width={50}
                height={50}
              /> */}

              <Heading
                color={"dark.100"}
                fontWeight={"semibold"}
                fontSize={"md"}
              >
                {job.title}
              </Heading>
              <VStack flexDirection={"row"} mt={2}>
                <Text numberOfLines={1} color={"gray.500"} fontWeight={"light"}>
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
