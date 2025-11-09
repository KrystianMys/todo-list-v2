import CloseAddingATaskBoxButton from "./components/buttons/closeAddingATaskBoxButton";
import OpenAddingATaskBoxButton from "./components/buttons/openAddingATaskBoxButton";
import { EditInput, AddATaskInput, SearchInput } from "./components/inputs/inputs";
import ChangingColorButton from "./components/buttons/changingColorButton";
import CloseEditBoxButton from "./components/buttons/closeEditBoxButton";
import ToggleTaskButton from "./components/buttons/toggleTaskButton";
import ApplyATaskButton from "./components/buttons/applyATaskButton";
import EditApplyButton from "./components/buttons/editApplyButton";
import type { MockDataInfo, EventInfo } from "./components/types";
import GitHubButton from "./components/buttons/gitHubButton";
import DeleteButton from "./components/buttons/deleteButton";
import TaskNameText from "./components/text/taskNameText";
import EditButton from "./components/buttons/editButton";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import "@fontsource/orbitron";
import "./App.css";

const mockData: MockDataInfo[] = [
  { id: 1, name: "Go to the gym", completed: false, editBoxIsOpen: false },
  { id: 2, name: "Walk with a dog", completed: false, editBoxIsOpen: false },
  { id: 3, name: "Learn how to hike in the mountains", completed: false, editBoxIsOpen: false },
];

const App = () => {
  const [tasks, setTasks] = useState(mockData);
  const [inputValue, setInputValue] = useState("");
  const [addingATaskBox, setAddingATaskBox] = useState(false);
  const [secondInputValue, setSecondInputValue] = useState("");

  const handleInputChange = (event: EventInfo) : void =>
    setInputValue(event.target.value);

  const filteredTasks = tasks.filter(task =>
    task.name.includes(secondInputValue)
  );

  const handleCloseEditBox = (taskId: number) : void => {
    setTasks(previous =>
      previous.map(el =>
        el.id === taskId ? { ...el, editBoxIsOpen: false } : el
      )
    );
    setInputValue("");
  };

  const handleOpenAddingATaskBox = () : void => {
    setAddingATaskBox(true);
    setTasks(previous =>
      previous.map(el => el ? { ...el, editBoxIsOpen: false } : el
      )
    );
    setInputValue("");
  };

  const handleToggle = (id: number) : void => {
    setTasks(previous =>
      previous.map(el =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  };

  const handleEditApply = (id: number) : void => {
    inputValue !== "" &&
      setTasks(previous =>
        previous.map(el =>
          el.id === id ? { ...el, name: inputValue, editBoxIsOpen: false } : el
        )
      );
    setInputValue("");
  };

  const handleEdit = (id: number) : void => {
    setTasks(previous =>
      previous.map(el =>
        el.id === id
          ? { ...el, editBoxIsOpen: true }
          : { ...el, editBoxIsOpen: false }
      )
    );
    setAddingATaskBox(false);
    setInputValue("");
  };

  const handleApplyATask = () : void => {
    const sortedIds = tasks.map(task => task.id).sort((a, b) => b - a);
    inputValue !== "" &&
      setTasks(previous => [
        ...previous,
        {
          id: sortedIds.length > 0 ? sortedIds[0] + 1 : 1,
          name: inputValue,
          completed: false,
          editBoxIsOpen: false,
        },
      ]);
    setInputValue("");
    setAddingATaskBox(inputValue === "");
  };

  return (
    <Box
      bgImage="url('https://i.pinimg.com/1200x/dc/eb/ef/dcebef49abb89b95b9d3fdb75c168b0a.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      minH="100vh">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#1e1e1e",
          padding: "10px 20px",
          width: "100%",
          height: "60px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
          position: "relative",
        }}>
        <GitHubButton />
        <SearchInput setSecondInputValue={setSecondInputValue} />
        <ChangingColorButton />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        p={5}
        maxW="800px"
        mx="auto"
        mt={10}
        bgColor="#9D00FF"
        boxShadow="0 0 20px #8A00FF, 0 0 40px #00FFFF"
        border="2px solid #FF00FF"
        borderRadius="lg"
        >
        {filteredTasks.map(task => (
          <Box
            key={task.id}
            display="flex"
            alignItems="center"
            bg="#E25C72"
            borderRadius="lg"
            boxShadow="md"
            p={3}
            transition="all 0.2s ease"
            _hover={{
              transform: "scale(1.02)",
              boxShadow: "0 0 15px #00FFFF",
            }}>
            <ToggleTaskButton onToggle={handleToggle} taskId={task.id} />
            <Box
              bgColor="#1e1e1e"
              ml={2}
              px={2}
              py={1}
              borderRadius="md"
              minW="150px">
              <TaskNameText taskName={task.name} taskCompleted={task.completed}/>
            </Box>
            {task.editBoxIsOpen && (
              <Box
                ml={4}
                bgColor="#1e1e1e"
                display="flex"
                alignItems="center"
                p={2}
                borderRadius="12px"
                width="59%"
                gap={2}>
                <EditInput onInputChange={handleInputChange} />
                <Box display="flex" gap={2} ml="auto">
                  <EditApplyButton onEditApply={handleEditApply} taskId={task.id} />
                  <CloseEditBoxButton onCloseEditBox={handleCloseEditBox} taskId={task.id} />
                </Box>
              </Box>
            )}
            <Box display="flex" gap={2} ml="auto">
              <EditButton onEdit={handleEdit} taskId={task.id} />
              <DeleteButton setTasks={setTasks} taskId={task.id} />
            </Box>
          </Box>
        ))}
        <Box
          bgColor="#00FFFF"
          display="flex"
          alignItems="center"
          gap={2}
          width="100%"
          p={2}
          borderRadius="12px">
          <OpenAddingATaskBoxButton handleOpenAddTaskBox={handleOpenAddingATaskBox} />
        </Box>
        {addingATaskBox && (
          <Box
            bg="#E25C72"
            borderRadius="md"
            p={4}
            mt={4}
            boxShadow="sm"
            display="flex"
            flexDirection="column"
            gap={2}>
            <AddATaskInput onInputChange={handleInputChange} />
            <ApplyATaskButton handleApplyATask={handleApplyATask} />
            <CloseAddingATaskBoxButton
              setAddingATaskBox={setAddingATaskBox}
              setInputValue={setInputValue}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default App;