import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import searchInput from "../../styles/searchInput";
import { Box, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
//import json
import jobsData from "../../assets/data/jobs.json";
import theme from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import { Keyboard } from "react-native";

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
    setSearchText("");
    setSearchResults([]);
    Keyboard.dismiss();
  };
  const navigation = useNavigation();
  return (
    <VStack p={3} style={theme.bgDark} flex={1}>
      <Box flexDirection={"row"} position={"relative"}>
        <TextInput
          style={[searchInput.searchBar, theme.bgDarkCard, theme.textWhite]}
          placeholder="Search Jobs"
          placeholderTextColor={"#999"}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={handleSearch}
          blurOnSubmit={true}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={handleCancel}>
            <Ionicons
              name="close"
              size={20}
              fontweight={"bold"}
              color={"white"}
              position="absolute"
              right={10}
              top={20}
            />
          </TouchableOpacity>
        )}
      </Box>

      <FlatList
        data={searchResults}
        keyExtractor={(job) => job}
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
