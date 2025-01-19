"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleX } from "lucide-react";
import { deleteTask } from "../actions";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DeleteTodo({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <CircleX className="py-1 bg-black rounded-lg text-gray-400"></CircleX>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Delete Task</DialogTitle>
        <DialogDescription>
          Click Confirm To Delete The Task.{" "}
        </DialogDescription>
        <DialogHeader>
          <div className="flex flex-row justify-end">
            <div className="flex gap-3">
              <Button variant={"destructive"} onClick={() => deleteTask(id)}>
                Confirm
              </Button>
              <Button onClick={() => setIsOpen(!isOpen)}>Cancel</Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
