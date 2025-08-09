import { Box } from "@chakra-ui/react";

const HeaderTimeline = ({ pxPerDay, startDate }) => {
  return [...Array(150)].map((_, i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    const text = date.toISOString().slice(5, 10);
    return (
      <Box
        key={text}
        position="absolute"
        left={i * pxPerDay}
        top={0}
        width={pxPerDay}
        height="100%"
        borderLeft="1px solid #eee"
        fontSize={10}
        textAlign="center"
        color="#555"
      >
        {text}
      </Box>
    );
  });
};

export default HeaderTimeline;
