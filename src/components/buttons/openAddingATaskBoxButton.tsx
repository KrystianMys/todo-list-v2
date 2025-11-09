import { Button } from "@chakra-ui/react";
import { CgAdd } from "react-icons/cg";

const OpenAddingATaskBoxButton = ({ handleOpenAddTaskBox } : { handleOpenAddTaskBox: () => void;}) => {
  return (
    <Button
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgColor="#00FFFF"
      _hover={{ bgColor: "#2e0b6eff" }}
      onClick={handleOpenAddTaskBox}>
      <CgAdd />
    </Button>
  );
};

export default OpenAddingATaskBoxButton;
