import { AppWindow } from "lucide-react";
import React from "react";
import SortButton from "./SortButton";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SubHeader = () => {
  return (
    <div className="w-full flex justify-between py-2">
      <div className="flex gap-2 items-center">
        <AppWindow height={40} width={40} strokeWidth={1} />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="font-bold text-sm">All Projects</span>
            <Badge>9</Badge>
          </div>
          <div className="flex items-center gap-4">
            <Progress value={70} className="w-[200] md:w-[300] h-1.25" />;
            <span className="text-xs text-slate-400">70% Completed</span>
          </div>
        </div>
      </div>
      <SortButton />
    </div>
  );
};

export default SubHeader;
