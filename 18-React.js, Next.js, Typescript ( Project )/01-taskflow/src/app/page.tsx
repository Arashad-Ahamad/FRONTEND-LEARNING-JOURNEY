import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6 rounded-xl border p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-center">TaskFlow</h1>

        <TodoForm />

        <div className="border-t pt-4">
          <TodoList />
        </div>
      </div>
    </main>
  );
}