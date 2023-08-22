import { Heading, VStack, View } from "native-base";
import React from "react";

export default () => {
  return (
    <View>
      <VStack width={"100%"}>
        <Heading color={"tomato"} fontWeight="semibold" size="lg">
          Find your ideal job
        </Heading>
      </VStack>
    </View>
  );
};
