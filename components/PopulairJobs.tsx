import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default () => {
  return (
   <TouchableOpacity> 
    <Text>
        job title
    </Text>
    <Text numberOfLines={1}>
        job location
    </Text>
   </TouchableOpacity>
  );
};
