import { Tasks } from "../types/types";
import { formatDate } from "../utils/formatDate";

interface Props {
  task: Tasks;
  deleteTask: (id: string) => void;
}

const TodoItem = ({ task, deleteTask }: Props) => {
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

  const formattedDates = formatDate(task.dateCreated);

  return (
    <div className="flex flex-col shadow-lg w-auto h-auto p-3 my-3 rounded-2xl bg-slate-200">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold">{task.task}</h2>
        <div className="text-xl">{task.category}</div>
      </div>
      <div className="flex flex-row justify-between mt-3 items-center">
        <span
          className={`text-lg text-white py-0.5 px-3 ${priorityColors} rounded-4xl`}
        >
          {task.priority}
        </span>
        <span>{formattedDates}</span>
        <button
          className="py-1 px-3 bg-blue-500 rounded-3xl text-white"
          onClick={handleDelete}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export { TodoItem };
