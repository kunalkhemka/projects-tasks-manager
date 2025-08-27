import { v4 as uuidv4 } from "uuid";
import { Task } from "../tasks/types";

export type Project = {
  id: string;
  clerkUserId: string;
  title: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
  tasks: Task[];
};
