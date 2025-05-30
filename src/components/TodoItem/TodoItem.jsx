import React from "react";

function TodoItem({ todos, packedTodo, removeTodo }) {
  return (
    <ul className="flex gap-8 justify-center flex-wrap px-20">
      {todos.map((todos) => (
        <li key={todos.id} className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={todos.packed}
            onChange={() => packedTodo(todos.id)}
          />
          <span
            className={`text-white text-md capitalize ${
              todos.packed ? "line-through" : ""
            }`}
          >
            {todos.quantity} {todos.text}
          </span>
          <button
            className="text-red-500 active:text-red-600 cursor-pointer"
            onClick={() => removeTodo(todos.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 8 8"
            >
              <path
                fill="currentColor"
                d="M1.41 0L0 1.41l.72.72L2.5 3.94L.72 5.72L0 6.41l1.41 1.44l.72-.72l1.81-1.81l1.78 1.81l.69.72l1.44-1.44l-.72-.69l-1.81-1.78l1.81-1.81l.72-.72L6.41 0l-.69.72L3.94 2.5L2.13.72L1.41 0z"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoItem;
