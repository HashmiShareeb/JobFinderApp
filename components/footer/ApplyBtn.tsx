import { Button } from "native-base";
import react from "react";
import { Linking } from "react-native";

export default ({ url }: { url: string }) => {
  return (
    <Button
      bgColor={"orange.600"}
      width="70%"
      mx={4}
      onPress={() => Linking.openURL(url)}
    >
      Apply Now
    </Button>
  );
};
