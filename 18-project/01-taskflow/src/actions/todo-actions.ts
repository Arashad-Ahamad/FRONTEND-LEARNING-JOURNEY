"use server";

import { revalidatePath } from "next/cache";
import { todoSchema } from "@/lib/schema";
import type { Todo } from "@/lib/types";

let todos: Todo[] = [];

export async function getTodos(): Promise<Todo[]> {
  return todos;
}

export async function addTodo(prevState: any, formData: FormData) {
  const raw = formData.get("title");

  const result = todoSchema.safeParse({ title: raw });

  if (!result.success) {
    return {
      success: false,
      error: result.error.issues[0].message,
    };
  }

  const newTodo: Todo = {
    id: crypto.randomUUID(),
    title: result.data.title,
    completed: false,
    createdAt: new Date(),
  };

  todos.push(newTodo);
  revalidatePath("/");

  return { success: true, error: null };
}

export async function toggleTodo(id: string) {
  todos = todos.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  revalidatePath("/");
}

export async function deleteTodo(id: string) {
  todos = todos.filter((t) => t.id !== id);
  revalidatePath("/");
}