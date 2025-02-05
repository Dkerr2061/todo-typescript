import { Tasks } from "../types/types";
import { TodoItem } from "./TodoItem";
import { TodoForm } from "./TodoForm";

interface TaskProps {
  tasks: Tasks[];
  deleteTask: (id: string) => void;
  addTask: (newTask: Tasks) => void;
  updateTask: (updateTask: Tasks, id: string) => void;
}

const TodoList = ({ tasks, deleteTask, addTask, updateTask }: TaskProps) => {
  const todoElement = tasks.map((task) => {
    return (
      <TodoItem
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    );
  });

  return (
    <div>
      <div className="my-4 flex justify-center">
        <TodoForm addTask={addTask} />
      </div>
      <div className="container mx-auto p-4 w-full max-w-xl">{todoElement}</div>
    </div>
  );
};

export { TodoList };
