import { Button } from "@chakra-ui/react";

const ApplyATaskButton = ({ handleApplyATask }: { handleApplyATask: () => void; }) => {
  return (
    <Button
      color="white"
      bgColor="#194419ff"
      fontFamily="'Orbitron', sans-serif"
      _hover={{ bg: "#2e6e2eff" }}
      onClick={handleApplyATask}
    >
      APPLY
    </Button>
  );
};

export default ApplyATaskButton;
