import Timeline from "./components/Timeline/TimeLine";
import timelineItems from "./components/Timeline/timelineItems";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const TimeLineApp = () => {
  return (
    <Box>
      <Flex justify="center" direction="column" align="center" mb={4}>
        <Heading>Timeline Challenge {"\u2728"}</Heading>
        <Text>{timelineItems.length} items available</Text>
      </Flex>
      <Timeline />
    </Box>
  );
};

export default TimeLineApp;
