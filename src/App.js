import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="container mx-auto p-4 flex-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodo />
      {/* <Filter /> */}
      <TodoList />
    </div>
  );
}

export default App;
