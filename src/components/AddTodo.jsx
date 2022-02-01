import React from "react";
import { useTaskState } from "../states/TaskState";

const AddTodo = () => {
  const taskState = useTaskState();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!e.target["toDo"].value.trim()) {
            return;
          }
          taskState.addTask(e.target["toDo"].value);
          e.target["toDo"].value = "";
        }}
      >
        <input name="toDo" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;