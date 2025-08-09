import Task from "./Task";

const Lanes = ({ lanes, startDate, pxPerDay, updateData }) => {
  return lanes.map((lane, laneIndex) =>
    lane.map((task, taskIndex) => (
      <Task
        key={task.id}
        task={task}
        laneIndex={laneIndex}
        startDate={startDate}
        pxPerDay={pxPerDay}
        taskIndex={taskIndex}
        updateData={updateData}
      />
    ))
  );
};

export default Lanes;
