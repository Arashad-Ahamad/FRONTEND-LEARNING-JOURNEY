"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { addTodo } from "@/actions/todo-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function TodoForm() {
  const [state, formAction, isPending] = useActionState(addTodo, {
    success: false,
    error: null as string | null,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);


  useEffect(() => {
    if (state.success) {
      setShowSuccess(true);
      formRef.current?.reset();

      const timer = setTimeout(() => setShowSuccess(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [state.success]);

  // ✅ Form pe koi bhi click (input focus, button) → message gayab
  const handleFormInteraction = () => {
    if (showSuccess) setShowSuccess(false);
  };

  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-3"
      onClick={handleFormInteraction}
      onFocus={handleFormInteraction}
    >
      <div className="space-y-2">
        <Label htmlFor="title">New Task</Label>
        <div className="flex gap-2">
          <Input
            id="title"
            name="title"
            placeholder="Add a new task..."
            disabled={isPending}
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? "Adding..." : "Add"}
          </Button>
        </div>
      </div>

      {state.error && (
        <p className="text-sm text-red-500">{state.error}</p>
      )}

      {showSuccess && (
        <p className="text-sm text-green-600">Task added!</p>
      )}
    </form>
  );
}