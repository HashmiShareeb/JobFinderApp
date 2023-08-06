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

  return (
    <VStack p={3}>
      <TextInput
        style={searchInput.searchBar}
        // style={{ height: 40, borderColor: "gray", borderWidth: 1, padding: 10 }}
        placeholder="Search Jobs"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={handleSearch}
        blurOnSubmit={true} // Add this line to dismiss the keyboard on submit
      />
      {searchText.length > 0 && (
        <TouchableOpacity onPress={handleCancel}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      )}
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </VStack>
  );
};
