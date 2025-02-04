import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Tasks } from "../types/types";

interface FormProps {
  id: string;
  task: string;
  priority: string;
  category: string;
}

interface Props {
  addTask: (newTask: Tasks) => void;
}

const TodoForm = ({ addTask }: Props) => {
  const [newTask, setNewTask] = useState<FormProps>({
    id: uuidv4(),
    task: "",
    category: "",
    priority: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(newTask as unknown as Tasks);
    setNewTask({
      id: uuidv4(),
      task: "",
      category: "",
      priority: "",
    });
  };

  return (
    <div className="flex justify-center w-96 p-6 shadow-2xl rounded-3xl">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold mb-3">Enter New Task</h1>
        <div className="flex flex-col">
          <input
            type="text"
            name="task"
            placeholder="Enter task here..."
            className="border-2 border-solid border-black rounded-md p-1.5 mb-2"
            value={newTask.task}
            onChange={handleChange}
          />
          <label className="font-bold mb-1">Priority:</label>
          <select
            name="priority"
            className="border-2 border-solid border-black rounded-md mb-2"
            onChange={handleChange}
            value={newTask.priority}
          >
            <option value="">Select..</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <label className="font-bold mb-1">Category</label>
          <select
            name="category"
            className="border-2 border-solid border-black rounded-md mb-2"
            onChange={handleChange}
            value={newTask.category}
          >
            <option value="">Select</option>
            <option value="chores">Chores</option>
            <option value="work">Work</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
        <button
          type="submit"
          className="py-1 px-3 bg-blue-500 rounded-3xl text-white"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export { TodoForm };
