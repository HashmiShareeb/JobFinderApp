import { Heading, ScrollView, VStack } from "native-base";
import React from "react";
import { View } from "react-native";
import PopulairJobCard from "./PopulairJobCard";
import { useNavigation } from "@react-navigation/native";
//import json file
import jobsData from "../assets/data/jobs.json";
//import theme styles
import theme from "../styles/theme";

const isLoading = false;
const error = false;

export default () => {
  const navigation = useNavigation();
  return (
    <VStack my={2}>
      <View>
        <Heading
          flexDirection={"row"}
          color={"white"}
          fontWeight={"bold"}
          fontSize={"md"}
        >
          Popular Jobs
        </Heading>
        <VStack mt={2} ml={-3}>
          {/* {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : error ? (
            <Text>No data </Text>
          ) : (
            
          )} */}

          {/* <FlatList
            data={jobsData}
            renderItem={({ item }) => (
              <PopulairJobCard
                item={item}
                onPress={() => navigation.navigate("Details")}
              />
            )}
            horizontal
          /> */}

          {/* search job */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {jobsData.map((job) => (
              <PopulairJobCard key={job.id} item={job} />
            ))}
          </ScrollView>
        </VStack>
      </View>
    </VStack>
  );
};
