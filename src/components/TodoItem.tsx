import { Tasks } from "../types/types";
import { formatDate } from "../utils/formatDate";
import { useState } from "react";

interface Props {
  task: Tasks;
  deleteTask: (id: string) => void;
  updateTask: (taskToUpdate: Tasks, id: string) => void;
}

const TodoItem = ({ task, deleteTask, updateTask }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [updatedTask, setUpdatedTask] = useState({
    id: task.id,
    task: task.task,
    priority: task.priority,
    category: task.category,
    dateCreated: task.dateCreated,
  });
  const priorityColors =
    task.priority === "low"
      ? "bg-green-500"
      : task.priority === "medium"
      ? "bg-orange-500"
      : task.priority === "high"
      ? "bg-red-500"
      : "";

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    setToggle((prevState) => !prevState);
  };
  const formattedDates = formatDate(task.dateCreated);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTask({ ...updatedTask }, task.id);
    setToggle((prevState) => !prevState);
  };

  return (
    <>
      {!toggle ? (
        <div className="flex flex-col shadow-lg w-auto h-auto p-3 my-3 rounded-2xl bg-slate-200">
          <h2 className="text-2xl font-bold text-center">{task.task}</h2>

          <div className="flex flex-row justify-between my-3 items-center">
            <span
              className={`text-lg text-white py-0.5 px-3 ${priorityColors} rounded-4xl`}
            >
              {task.priority}
            </span>
            <span>{formattedDates}</span>
            <span className="text-xl">{task.category}</span>
          </div>
          <div className="flex flex-row justify-center gap-2">
            <button
              className="py-1 px-3 bg-blue-500 rounded-3xl text-white"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="py-1 px-3 bg-blue-500 rounded-3xl text-white"
              onClick={handleDelete}
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <form className="flex flex-col shadow-lg w-auto h-auto p-3 my-3 rounded-2xl bg-slate-200">
          <input
            type="text"
            name="task"
            className="border-2 border-solid border-black rounded-md p-1.5 mb-2 bg-white"
            value={updatedTask.task}
            placeholder="Enter task"
            onChange={handleChange}
          />

          <div className="flex flex-row justify-between my-3 items-center">
            <select
              name="priority"
              className="border-2 border-solid border-black rounded-md mb-2 bg-white p-1"
              value={updatedTask.priority}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <span>{formattedDates}</span>
            <select
              name="category"
              className="border-2 border-solid border-black rounded-md mb-2 bg-white p-1"
              value={updatedTask.category}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="school">School</option>
              <option value="work">Work</option>
              <option value="chores">Chores</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>
          <div className="flex flex-row justify-center gap-2">
            <button
              className="py-1 px-3 bg-blue-500 rounded-3xl text-white"
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export { TodoItem };
