export type Tasks = {
  id: string;
  task: string;
  dateCreated: string;
  category: "chores" | "work" | "entertainment" | string;
  priority: "low" | "medium" | "high" | string;
};
