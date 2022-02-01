
import { useTaskState } from "./states/TaskState";
import ToDoList from "./components/ToDoList";
import AddTodo from "./components/AddTodo";

// CSS
import './App.css'

export default function App() {
  const taskState = useTaskState();
  console.log(taskState.getTasks);
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <AddTodo />
      <ToDoList />
    </div>
  );
}