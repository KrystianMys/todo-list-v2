import { Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";

const GitHubButton = () => {
  return (
    <Button
      variant="contained"
      color="white"
      onClick={() => window.open("https://github.com/KrystianMys", "_blank")}
    >
      Github <FaGithub style={{ marginLeft: "8px" }} />
    </Button>
  );
};

export default GitHubButton;
