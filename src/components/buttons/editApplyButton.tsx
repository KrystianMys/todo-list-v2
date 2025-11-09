import { Button } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const EditApplyButton = ({ onEditApply, taskId } : { onEditApply: (id: number) => void; taskId: number;}) => {
  return (
    <Button
      bgColor="red.300"
      color="green"
      _hover={{ bg: "#184b37ff" }}
      onClick={() => onEditApply(taskId)}>
      <FaCheck />
    </Button>
  );
};

export default EditApplyButton;
