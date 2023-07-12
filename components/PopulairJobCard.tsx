import react from "react";
import { TouchableOpacity, Image } from "react-native";
import CheckImage from "../Utilities/CheckImage";
import { VStack, Text } from "native-base";
import jobcards from "../styles/jobcards";
import { useNavigation } from "@react-navigation/native";
import { Job } from "../Interface/Jobs";

export default ({ item }: { item: Job }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={jobcards.container}
      //   key={item.job_id}
      //   onPress={() => handleJobPopulairPress(item.job_id)}
      onPress={() => navigation.navigate("Details", { job: item.id })}
    >
      <TouchableOpacity style={jobcards.logoContainer}>
        <Image
          alt="image base"
          source={{
            uri: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={jobcards.logo}
        />
      </TouchableOpacity>
      {/* numberofline --> make longer texts fit in one line */}
      <Text style={jobcards.companyName} numberOfLines={1}>
        {item.company_name}
      </Text>
      <VStack space={2}>
        <Text
          fontSize="md"
          mt={2}
          isTruncated
          maxW={300}
          w="80%"
          numberOfLines={1}
        >
          {item.title}
        </Text>
        <Text numberOfLines={1}>{item.location}</Text>
      </VStack>
    </TouchableOpacity>
  );
};
