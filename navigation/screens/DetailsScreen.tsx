import { Button, Image, VStack, Text } from "native-base";
import * as React from "react";
import { View } from "react-native";

export default ({ navigation, route }: { navigation: any; route: any }) => {
  const handleApply = () => {
    // Perform action for applying to the job
  };
  const { job } = route.params;
  return (
    <VStack flex={1} alignItems="center">
      <Image
        mt={8}
        width={50}
        height={50}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png",
        }}
        alt="Job Image"
        resizeMode="contain"
      />
      <VStack padding={4}>
        <Text fontWeight="bold" fontSize="xl" marginBottom={2}>
          {job.title}
        </Text>
        <Text fontSize="md" marginBottom={2}>
          {job.company_name}
        </Text>
        <Text fontSize="sm" marginBottom={2}>
          {job.location}
        </Text>
        <Text fontSize="md">Job Description</Text>
        <Text fontSize="md">{job.description}</Text>
      </VStack>
      <Button width="80%" marginBottom={4} onPress={handleApply}>
        Apply
      </Button>
    </VStack>
  );
};
