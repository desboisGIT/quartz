import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { create } from "zustand";
import { CounterStore, TaskStore, AddTaskTypes, TaskTypes } from "~/types/Tasks";

export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    add: (task: AddTaskTypes) => set((state) => ({
        tasks: [
            ...state.tasks,
            {
                ...task,
                completitions: 0,
                isDone: false,
                uuid: uuidv4(),
            } as TaskTypes,
        ],
    })),
    delete: (uuid: string) => set((state) => ({
        tasks: state.tasks.filter((task) => task.uuid !== uuid),
      })),
}));