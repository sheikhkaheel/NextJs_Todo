"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createTask } from "../actions";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function AddTodo() {
  const [pending, setPending] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(formData: FormData) {
    setPending(true);
    const result = await createTask(formData);

    if (result.success) {
      toast({
        title: "SUCCESS",
        description: "Task Added Successfully",
      });
    } else {
      toast({
        title: "Error",
        description: "Some Error Occurred",
        variant: "destructive",
      });
    }
    setPending(false);
  }

  return (
    <form action={handleSubmit}>
      <label className="text-3xl font-semibold mr-4">Create a Todo</label>
      <Input
        className="my-2 border text-black lg:w-[20rem] placeholder:text-gray-700 bg-white"
        type="text"
        placeholder="Task Name..."
        name="task"
      />
      <Button variant="default" disabled={pending}>
        {!pending ? "Save" : "Saving..."}
      </Button>
    </form>
  );
}
