import { Input } from "@chakra-ui/react";
import type { InputValueFunctionInfo, ThirdStateInfo } from "../types";

export const EditInput = ({ onInputChange } : InputValueFunctionInfo) => {
  return (
    <Input
      placeholder="Edit here"
      sx={{
        width: "70%",
        borderRadius: "8px",
        padding: "8px 12px",
        color: "#fff",
        backgroundImage:
          'url("https://i.pinimg.com/1200x/aa/4e/cd/aa4ecdc15e5d73b922900417f863ca9c.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "2px solid #555",
        "::placeholder": {
          color: "#eee",
        },
      }}
      onChange={event => onInputChange(event)}
    ></Input>
  );
};

export const AddATaskInput = ({ onInputChange } : InputValueFunctionInfo) => {
  return (
    <Input
      placeholder="Add a task here"
      sx={{
        borderRadius: "8px",
        padding: "8px 12px",
        color: "#fff",
        backgroundImage:
          'url("https://i.pinimg.com/1200x/aa/4e/cd/aa4ecdc15e5d73b922900417f863ca9c.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "2px solid #555",
        "::placeholder": {
          color: "#eee",
        },
      }}
      onChange={event => onInputChange(event)}
    />
  );
};

export const SearchInput = ({setSecondInputValue} : ThirdStateInfo) => {
  return (
    <Input
      placeholder="Search"
      onChange={event => setSecondInputValue(event.target.value)}
      sx={{
        width: "40%",
        borderRadius: "8px",
        padding: "8px 12px",
        color: "#fff",
        backgroundImage:
          'url("https://i.pinimg.com/1200x/aa/4e/cd/aa4ecdc15e5d73b922900417f863ca9c.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "2px solid #555",
        "::placeholder": {
          color: "#eee",
        },
      }}
    />
  );
};
