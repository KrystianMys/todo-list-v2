import { Button } from "@chakra-ui/react";

const ChangingColorButton = () => {
  return (
    <Button
      variant="contained"
      color="#1e1e1e"
      sx={{
        backgroundColor: "#1e1e1e",
        "&:hover": {
          backgroundColor: "#1e1e1e",
        },
      }}
    >
      Change color
    </Button>
  );
};

export default ChangingColorButton;