import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [text, setText] = useState(""); // Initialize state with an empty string
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return; // Prevent adding empty todos

    dispatch(
      addTodo({
        id: uuidv4(),
        text: text,
        completed: false,
      })
    );

    setText(""); // Clear input after adding todo
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded p-2 mr-2 w-64"
        placeholder="Add a new todo item..."
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded p-2"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
