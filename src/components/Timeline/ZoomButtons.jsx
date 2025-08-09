import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

const ZoomButtons = ({ zoomIn, zoomOut }) => {
  return (
    <Box my={3}>
      <Button leftIcon={<TriangleDownIcon />} onClick={zoomIn} colorScheme="teal" size="sm" mr={2}>
        Zoom In
      </Button>
      <Button leftIcon={<TriangleUpIcon />} onClick={zoomOut} colorScheme="blue" size="sm" mr={2}>
        Zoom Out
      </Button>
    </Box>
  );
};

export default ZoomButtons;
