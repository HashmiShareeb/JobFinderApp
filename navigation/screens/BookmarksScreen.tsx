import { Heading, VStack } from "native-base";
import react from "react";
import theme from "../../styles/theme";

export default () => {
  return (
    <VStack flex={1} style={theme.bgDark}>
      <Heading color={"white"}>Bookmarks</Heading>
    </VStack>
  );
};
