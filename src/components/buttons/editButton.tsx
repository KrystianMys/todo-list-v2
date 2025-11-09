import { Button } from "@chakra-ui/react";
import { FaPaintbrush } from "react-icons/fa6";

const EditButton = ({ onEdit, taskId } : { onEdit: (id: number) => void; taskId: number }) => {
  return (
    <Button
      bg="#1e1e1e"
      _hover={{ bg: "#2e0b6e" }}
      onClick={() => {onEdit(taskId)}}>
      <FaPaintbrush style={{ color: "#d3d017ff" }} />
    </Button>
  );
};

export default EditButton;
