import { getTodos } from "@/actions/todo-actions";
import { TodoItem } from "@/components/TodoItem";

export async function TodoList() {
  const todos = await getTodos();

  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-500 py-6">
        No todos yet! Add one above.
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}