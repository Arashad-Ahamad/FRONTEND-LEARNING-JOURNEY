"use client";

import { toggleTodo, deleteTodo } from "@/actions/todo-actions";
import { Button } from "@/components/ui/button";
import type { Todo } from "@/lib/types";

export function TodoItem({ todo }: { todo: Todo }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-md border p-3">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="h-4 w-4 cursor-pointer"
        />
        <span
          className={
            todo.completed ? "line-through text-gray-400" : ""
          }
        >
          {todo.title}
        </span>
      </div>

      <Button
        variant="destructive"
        size="sm"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </Button>
    </div>
  );
}