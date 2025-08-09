import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { dateToX } from "./dates";
import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

function calculateWidth(task, pxPerDay) {
  const startDate = new Date(task.start);
  const endDate = new Date(task.end);

  const dayDiff =
    (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;

  const width = Math.max(dayDiff, 1) * pxPerDay;

  return width;
}

const Task = ({ task, laneIndex, startDate, pxPerDay, updateData, taskIndex }) => {
  const [taskName, setTaskName] = useState(task.name);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${task.id.toString()}-${laneIndex}-${taskIndex}`,
  });

  const offsetX = transform ? transform.x : 0;
  const left = dateToX(task.start, startDate, pxPerDay) + offsetX;
  const width = calculateWidth(task, pxPerDay);

  const handlePointerDown = (event) => {
    if (event.target.closest("button")) {
      return;
    }
    listeners.onPointerDown?.(event);
  };

  const handleSave = () => {
    updateData({ name: taskName, laneIndex, taskIndex });
    onClose();
  };

  return (
    <>
      <Box
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        onPointerDown={handlePointerDown}
        position="absolute"
        left={left}
        top={laneIndex * 50 + 30} // lane position
        width={width}
        height={30}
        background="orange.100"
        color="white"
        textAlign="center"
        lineHeight="30px"
        borderRadius={4}
        cursor="grab"
      >
        <Button onClick={onOpen} size="sm" variant="link" width="auto" maxW="100%">
          <Text
            fontSize="sm"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {task.name}
          </Text>
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit element</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              onChange={(e) => setTaskName(e.target.value)}
              value={taskName}
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="red" mr={2} onClick={onClose}>
              Close
            </Button>
            <Button
              leftIcon={<EditIcon />}
              mr={3}
              onClick={handleSave}
              colorScheme="green"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Task;
