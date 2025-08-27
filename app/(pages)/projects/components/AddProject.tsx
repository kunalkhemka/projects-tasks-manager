"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LayoutGridIcon, PlusIcon, SquareMenu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { IconName, IconPicker, Icon } from "@/components/ui/icon-picker";

const schema = z.object({
  projectName: z
    .string()
    .min(1, { message: "Project name is required" })
    .max(30, { message: "Project name must be 30 characters or less" }),
});

const AddProjectForm = ({ closeDialog }: { closeDialog: Function }) => {
  const [selectedIcon, setSelectedIcon] = useState<IconName | undefined>(
    undefined
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data, selectedIcon);
    closeDialog();
  };

  const onProjectIconSelect = (icon: IconName) => {
    setSelectedIcon(icon);
    console.log("Selected icon:", icon);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <p className="mb-2 text-black font-medium">Project Name</p>
        <div className="flex gap-2 items-center">
          <Input
            type="text"
            placeholder="Enter Project Name..."
            className="input input-bordered"
            {...register("projectName")}
          />
          <IconPicker
            value={selectedIcon}
            onValueChange={onProjectIconSelect}
            modal={true}
            className="cursor-pointer"
          >
            {selectedIcon ? (
              <Icon name={selectedIcon} />
            ) : (
              <SquareMenu size={45} />
            )}
          </IconPicker>
        </div>
        {errors.projectName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.projectName.message}
          </p>
        )}
      </div>
      <div className="flex justify-end">
        <Button type="submit" className="bg-orange-500 hover:bg-orange-800">
          Add Project
        </Button>
      </div>
    </form>
  );
};

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
