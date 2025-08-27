import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AppWindow, EllipsisVertical } from "lucide-react";
import React from "react";
import { Progress } from "@/components/ui/progress";

const ProjectCard = () => {
  return (
    <Card className="w-full sm:w-72 border-gray-200 shadow-lg">
      <CardHeader>
        <div className="flex gap-2">
          <AppWindow height={36} width={36} strokeWidth={1} />
          <div className="flex flex-col gap-1">
            <CardTitle className="font-bold">Project Title</CardTitle>
            <CardDescription className="text-xs font-stretch">
              2 days ago
            </CardDescription>
          </div>
        </div>
        <CardAction>
          <EllipsisVertical className="w-4 h-4" />
        </CardAction>
      </CardHeader>
      <CardContent className="text-slate-400 text-xs">
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 text-xs">
        <Progress value={50} className="w-full" />
        <div className="w-full flex justify-between">
          <span className="text-slate-400">In Progress</span>
          <span className="font-medium">50%</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
