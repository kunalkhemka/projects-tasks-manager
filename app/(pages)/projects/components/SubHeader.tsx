import { Button } from "@/components/ui/button";
import { ArrowDown01Icon, PlusIcon, SortAscIcon } from "lucide-react";
import React from "react";
import SortButton from "./SortButton";

const SubHeader = () => {
  return (
    <div className="w-full flex justify-between border-t border-b py-2">
      <span className="flex items-center font-bold">My Projects</span>
      <SortButton />
    </div>
  );
};

export default SubHeader;
