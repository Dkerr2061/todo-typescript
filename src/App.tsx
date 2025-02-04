import { useEffect, useState } from "react";
import { Tasks } from "./types/types";
import { Route, Routes } from "react-router-dom";
import { TodoList } from "./components/TodoList";
import "./index.css";
import { About } from "./pages/About";

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  //* API call to GET Tasks
  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await fetch("http://localhost:3000/tasks");
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        console.log(err);
      }
    };
    getTasks();
  }, []);

  //* API call to DELETE Tasks
  const deleteTask = (id: string) => {
    const removeTask = async () => {
      try {
        await fetch(`http://localhost:3000/tasks/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        setTasks(tasks.filter((task) => task.id !== id));
      } catch (err) {
        console.log(err);
      }
    };
    removeTask();
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          index
          element={<TodoList tasks={tasks} deleteTask={deleteTask} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
