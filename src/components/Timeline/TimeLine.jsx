import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Box } from "@chakra-ui/react";
import { dateToX, xToDate } from "./dates";
import timelineItems from "./timelineItems";
import assignLanes from "./assignLanes";
import ZoomButtons from "./ZoomButtons";
import HeaderTimeline from "./HeaderTimeline";
import Lanes from "./Lanes";


const TimelineApp = () => {
  const initialData = assignLanes(timelineItems);
  const [lanes, setLanes] = useState(initialData);
  const [pxPerDay, setPxPerDay] = useState(20);
  const startDate = "2021-01-01";

  const handleDragEnd = (event) => {
    const { delta, active } = event;
    const [, laneIndex, taskIndex] = active.id.split("-");

    const newLanes = [...lanes];
    const task = newLanes[laneIndex][taskIndex];
    newLanes[laneIndex][taskIndex].start = xToDate(dateToX(task.start, startDate, pxPerDay) + delta.x, startDate, pxPerDay);
    newLanes[laneIndex][taskIndex].end = xToDate(dateToX(task.end, startDate, pxPerDay) + delta.x, startDate, pxPerDay);
    setLanes(newLanes);
  };

  const updateData = ({ name, laneIndex, taskIndex}) => {
    const newLanes = [...lanes];
    newLanes[laneIndex][taskIndex].name = name;
    setLanes(newLanes);
  }

  return (
    <Box>
     <ZoomButtons 
        zoomIn={() => setPxPerDay(pxPerDay * 1.2)}
        zoomOut={() => setPxPerDay(pxPerDay / 1.2)}
     />
      <DndContext onDragEnd={handleDragEnd}>
        <Box 
            position="relative"
            border="1px solid #ccc"
            overflow="auto"
            height={lanes.length * 90 + 50} 
        >
          <HeaderTimeline pxPerDay={pxPerDay} startDate={startDate} />
          <Lanes lanes={lanes} startDate={startDate} pxPerDay={pxPerDay} updateData={updateData}/>
        </Box>
      </DndContext>
    </Box>
  );
}


export default TimelineApp;