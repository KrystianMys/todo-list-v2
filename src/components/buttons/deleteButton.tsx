import { Button } from "@chakra-ui/react";
import type { FirstStateInfo } from "../types";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteButton = ({ setTasks, taskId } : FirstStateInfo) => {
  return (
    <Button
      ml="auto"
      transform="translateX(4px)"
      bgColor="#1e1e1e"
      _hover={{ bg: "#2e0b6e" }}
      onClick={() => setTasks(previous => previous.filter(el => el.id !== taskId))}>
      <FaRegTrashAlt style={{ color: "#eb2b09ff" }} />
    </Button>
  );
};

export default DeleteButton;
