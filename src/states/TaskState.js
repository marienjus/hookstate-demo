
import { createState, useState } from "@hookstate/core";

import {v4 as uuid} from "uuid";

const taskState = createState([]);

export function useTaskState() {
  const state = useState(taskState);

  return {
    addTask(text) {
      return state.set((tasks) => [...tasks, { text, id: uuid() }]);
    },
    removeTask(id) {
      return state.set((tasks) => tasks.filter((task) => task.id !== id));
    },
    get getTasks() {
      return state.get();
    }
  };
}