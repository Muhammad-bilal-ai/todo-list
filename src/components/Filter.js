import React, { useState } from "react";
import { useSelector } from "react-redux";

const Filter = () => {
  const [filter, setFilter] = useState("all");
  const todos = useSelector((state) => state.todos);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="mb-4">
      <button
        onClick={() => setFilter("all")}
        className="bg-gray-300 text-black rounded p-2 mr-2"
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className="bg-gray-300 text-black rounded p-2 mr-2"
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("pending")}
        className="bg-gray-300 text-black rounded p-2"
      >
        Pending
      </button>
      <div>
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="p-4 border-b">
            {todo.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
