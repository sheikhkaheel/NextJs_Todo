"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit2Icon } from "lucide-react";
import { ChangeEvent, useActionState, useState } from "react";
import { editTask } from "../actions";

export default function EditTodo({ id, task }: { id: string; task: string }) {

  const [todo, setTodo] = useState<string>(task);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Edit2Icon className="py-1 bg-black text-gray-400 rounded-lg"></Edit2Icon>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogDescription>
            Make changes to your task here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="">
            <Label htmlFor="name" className="text-right">
              Task
            </Label>
            <Input
              id="name"
              value={todo}
              name="task"
              className="mt-2 col-span-3"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTodo(e.target.value)
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            disabled={isLoading}
            onClick={async () => {
              setIsLoading(true)
              const message = await editTask({ id, task: todo });
              setIsLoading(!message.success)
              setIsOpen(!isOpen);
            }}
          >
            {!isLoading ? "Save" : "Saving..."}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
