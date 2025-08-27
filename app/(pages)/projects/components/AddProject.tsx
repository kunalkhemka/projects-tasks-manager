"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LayoutGridIcon, PlusIcon, SquareMenu } from "lucide-react";
import AddProjectForm from "./AddProjectForm";

const AddProject = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="gap-1 bg-orange-500 hover:bg-orange-800 cursor-pointer"
        >
          <PlusIcon className="" />
          <span>New Project</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <LayoutGridIcon className="inline mr-2 text-orange-500" />
            <span className="align-middle font-bold">Add Project</span>
          </DialogTitle>
          <div className="mt-4">
            <AddProjectForm closeDialog={closeDialog} />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddProject;
