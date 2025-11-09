import { Button } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

const CloseEditBoxButton = ({ onCloseEditBox, taskId } : {onCloseEditBox: (taskId: number) => void; taskId: number;}) => {
  return (
    <Button
      bgColor="red.300"
      color="#eb2b09ff"
      _hover={{ bg: "red.700", color: "white" }}
      onClick={() => onCloseEditBox(taskId)}>
      <IoClose />
    </Button>
  );
};

export default CloseEditBoxButton;