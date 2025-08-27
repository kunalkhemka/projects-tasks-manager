export type Task = {
  id: string;
  projectId: string;
  title: string;
  icon: string;
  status: "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  createdAt: string;
  updatedAt: string;
};