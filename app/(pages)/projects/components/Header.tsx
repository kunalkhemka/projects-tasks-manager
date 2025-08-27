import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React from "react";
import AddProject from "./AddProject";

const Header = () => {
  return (
    <div className="flex flex-col items-end mr-10 mb-10">
      <AddProject />
    </div>
  );
};

export default Header;
