import { Button } from "@/components/ui/button";
import { Icon, IconName, IconPicker } from "@/components/ui/icon-picker";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SquareMenu } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

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

export default AddProjectForm;
