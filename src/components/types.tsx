export type MockDataInfo = { id: number; name: string; completed: boolean; editBoxIsOpen: boolean;};

export type EventInfo = {target: {value: string};};

export type InputValueFunctionInfo = { onInputChange: (event: EventInfo) => void;};

export type FirstStateInfo = {
    setTasks: React.Dispatch<React.SetStateAction<MockDataInfo[]>>;
    taskId: number;
};

export type SecondStateInfo = {
    setAddingATaskBox: React.Dispatch<React.SetStateAction<boolean>>;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export type ThirdStateInfo = {
    setSecondInputValue: React.Dispatch<React.SetStateAction<string>>;
};