import { Checkbox} from "@chakra-ui/react";

const ToggleTaskButton = ({ onToggle, taskId } : {onToggle: (id: number) => void; taskId: number;}) => {
  return (
    <Checkbox
      onChange={() => onToggle(taskId)}
      size="lg"
      borderColor="gray.300"
      borderRadius="md"
      transition="transform 0.12s ease, box-shadow 0.12s ease, background-color 0.12s ease"
      _hover={{ transform: "translateY(-1px) scale(1.02)" }}
      _focus={{ boxShadow: "0 0 0 4px rgba(255,105,180,0.12)" }}
      _checked={{
        bg: "#FF4081",
        borderColor: "#FF4081",
        color: "black", 
      }}
      sx={{
        "> span": { display: "inline-flex", alignItems: "center" },
      }}
    ></Checkbox>
  );
};

export default ToggleTaskButton;
