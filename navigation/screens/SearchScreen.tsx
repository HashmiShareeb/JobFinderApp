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

// JSON data
const jobsData = [
  {
    id: 1,
    title: "Software Engineer",
    description:
      "We are seeking a skilled Software Engineer to join our development team...",
    company: "Apple Inc.",
    logo: "https://example.com/apple-logo.png",
  },
  {
    id: 2,
    title: "Frontend Developer",
    description:
      "Join our dynamic frontend development team and build amazing user interfaces...",
    company: "Google LLC",
    logo: "https://example.com/google-logo.png",
  },
  {
    id: 3,
    title: "Data Scientist",
    description:
      "We are looking for a talented Data Scientist to analyze and interpret complex data...",
    company: "Microsoft Corporation",
    logo: "https://example.com/microsoft-logo.png",
  },
  // Add more job objects here
];

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
