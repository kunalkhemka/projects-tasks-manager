import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-end mr-10 mb-10">
      <Button variant="default" className="gap-1 cursor-pointer">
        <PlusIcon className="" />
        <span>New Task</span>
      </Button>
    </div>
  );
};

export default Header;
