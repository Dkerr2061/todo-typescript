export type Tasks = {
  id: string;
  task: string;
  dateCreated: Date;
  category: "chores" | "work" | "entertainment" | string;
  priority: "low" | "medium" | "high" | string;
};
