import { Button } from "@chakra-ui/react";
import type { SecondStateInfo } from "../types";

const CloseAddingATaskBoxButton = ({ setAddingATaskBox, setInputValue } : SecondStateInfo) => {
  return (
    <Button
      color="red"
      bgColor="#1e1e1e"
      _hover={{ bg: "red.900", color:"white"}}
      fontFamily="'Orbitron', sans-serif"
      onClick={() => {
        setAddingATaskBox(false);
        setInputValue("");
      }}
    >
      CLOSE
    </Button>
  );
};

export default CloseAddingATaskBoxButton;