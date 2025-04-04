export interface CounterStore {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export interface TaskTypes {
    title: string;
    discipline: number;
    consistency: number;
    completitions: number;
    isDone: boolean;
    uuid: string; 
}

export interface AddTaskTypes {
    title: string;
    discipline: number;
    consistency: number;
}

export interface TaskStore {
    tasks: TaskTypes[];
    add: (task: AddTaskTypes) => void; 
    delete: (uuid: string) => void; 
}