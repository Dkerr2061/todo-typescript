import { Tasks } from "../types/types";
import { TodoItem } from "./TodoItem";

interface TaskProps {
  tasks: Tasks[];
  deleteTask: (id: string) => void;
}

const TodoList = ({ tasks, deleteTask }: TaskProps) => {
  const todoElement = tasks.map((task) => {
    return <TodoItem key={task.id} task={task} deleteTask={deleteTask} />;
  });

  return (
    <div className="container mx-auto p-4 w-full max-w-xl">{todoElement}</div>
  );
};

export { TodoList };
