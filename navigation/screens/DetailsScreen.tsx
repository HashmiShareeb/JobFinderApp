import { Button, Image, VStack, Text, HStack, Center } from "native-base";
import * as React from "react";
import { microsftLogo } from "../../assets/MSFT.png";

export default ({ navigation, route }: { navigation: any; route: any }) => {
  const handleApply = () => {
    // Perform action for applying to the job
  };

  //placeholder image
  const placeholderImage =
    "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg";

  const getLogoFromFileName = (fileName: any) => {
    switch (fileName) {
      case "MSFT.png":
        return microsftLogo;

      default:
        return placeholderImage;
    }
  };

  const { job } = route.params;
  return (
    <VStack flex={1} alignItems="center">
      <Image
        mt={8}
        source={job.logo ? getLogoFromFileName(job.logo) : placeholderImage}
        style={{ width: 200, height: 200 }} // Adjust the width and height as needed
        resizeMode="contain" // Adjust the resizeMode if necessary
        alt="Job Image"
      />
      {/* <Image
        mt={8}
        width={50}
        height={50}
        source={{
          uri: job.logo
            ? job.logo
            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
        }}
        alt="Job Image"
        resizeMode="contain"
      /> */}

      <VStack padding={4}>
        <Text
          fontWeight="bold"
          fontSize="xl"
          marginBottom={2}
          textAlign={"center"}
        >
          {job.title}
        </Text>
        <HStack space={2} margin={"auto"} alignItems={"center"}>
          <Text fontSize="md" marginBottom={2}>
            {job.company_name}
          </Text>
          <Text fontSize="sm" marginBottom={2}>
            {job.location}
          </Text>
        </HStack>
        <Text fontSize="md" fontWeight={"bold"} textTransform={"capitalize"}>
          description
        </Text>
        <Text fontSize="md">{job.applicationRequirements}</Text>
      </VStack>
      <Button width="80%" marginBottom={4} onPress={handleApply}>
        Apply
      </Button>
    </VStack>
  );
};
