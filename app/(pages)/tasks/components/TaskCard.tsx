import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AppWindow,
  Dot,
  FilePenLine,
  ListChecks,
  RefreshCwIcon,
  SquarePen,
  Trash2,
} from "lucide-react";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div>
        <input type="checkbox" className="checkbox checkbox-sm" />
      </div>
      <Card className="w-full h-[80] justify-center border-none shadow-lg">
        <CardContent className="flex items-center">
          <div className="flex flex-grow-2 gap-3">
            <ListChecks
              size={36}
              strokeWidth={1.5}
              viewBox="-3 -3 30 30"
              className="bg-orange-100 text-orange-500 rounded-sm"
            />
            <div className="flex flex-col gap-1">
              <CardTitle className="font-bold">Project Title</CardTitle>
              <CardDescription className="text-xs font-stretch">
                2 days ago
              </CardDescription>
            </div>
          </div>
          <div className="flex flex-row flex-grow-1 gap-1 justify-end items-center font-medium">
            <RefreshCwIcon height={16} width={16} color="gray" />
            <span className="text-xs text-slate-400">In Progress</span>
          </div>
          <div className="flex flex-row flex-grow-1 justify-end items-center font-medium">
            <Dot size={30} strokeWidth={6} color="green" />
            <span className="text-xs text-slate-400">Low</span>
          </div>
          <div className="flex flex-row flex-grow-1 justify-end gap-2 items-center">
            <SquarePen size={20} strokeWidth={1.5} className="text-slate-400" />
            <Trash2 size={20} strokeWidth={1.5} className="text-slate-400" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
