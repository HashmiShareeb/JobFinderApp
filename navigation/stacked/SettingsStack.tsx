import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import searchInput from "../../styles/searchInput";
import { VStack } from "native-base";
//import json
import jobsData from "../../assets/data/jobs.json";
import theme from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = jobsData.filter((job) =>
      job.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleCancel = () => {
    setSearchText("");
    // Hide the keyboard or perform any other desired action
  };
  const navigation = useNavigation();
  return (
    <VStack p={3} style={theme.bgDark} flex={1}>
      <TextInput
        style={[searchInput.searchBar, theme.bgDarkCard, theme.textWhite]}
        // style={{ height: 40, borderColor: "gray", borderWidth: 1, padding: 10 }}
        placeholder="Search Jobs"
        placeholderTextColor={"#999"}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={handleSearch}
        blurOnSubmit={true} // Add this line to dismiss the keyboard on submit
      />
      {searchText.length > 0 && (
        <TouchableOpacity onPress={handleCancel}>
          <Text style={theme.textWhite}>Cancel</Text>
        </TouchableOpacity>
      )}
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <VStack my={5}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { job: item })} // Use { job: item }
            >
              <Text style={theme.textWhite}>{item.title}</Text>
            </TouchableOpacity>
          </VStack>
        )}
      />
    </VStack>
  );
};
