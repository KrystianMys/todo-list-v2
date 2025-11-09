import { Text } from "@chakra-ui/react";

const TaskNameText = ({ taskName, taskCompleted } : {taskName: string; taskCompleted: boolean;}) => {
  return (
    <Text
      color="white"
      textDecoration={taskCompleted ? "line-through" : ""}
      textDecorationColor="red.500"
      textDecorationThickness="3px"
      fontFamily="'Orbitron', sans-serif"
    >
      {taskName}
    </Text>
  );
};

export default TaskNameText;
