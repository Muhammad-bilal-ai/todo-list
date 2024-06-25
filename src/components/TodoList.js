import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleComplete, editTodo } from "../features/todoSlice";
import { motion } from "framer-motion";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const handleSave = (id) => {
    dispatch(editTodo({ id, text: editingText }));
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div>
      {todos.map((todo) => (
        <motion.div
          key={todo.id}
          className={`p-4 border-b flex justify-between items-center ${
            todo.completed ? "bg-gray-100" : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {editingId === todo.id ? (
            <input
              type="text"
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              className="border rounded p-2 mr-2 w-64"
            />
          ) : (
            <span className={`${todo.completed ? "line-through" : ""}`}>
              {todo.text}
            </span>
          )}
          <div>
            <button
              onClick={() => dispatch(toggleComplete(todo.id))}
              className="bg-green-500 text-white rounded p-2 mr-2"
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>
            {editingId === todo.id ? (
              <button
                onClick={() => handleSave(todo.id)}
                className="bg-blue-500 text-white rounded p-2 mr-2"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                className="bg-yellow-500 text-white rounded p-2 mr-2"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="bg-red-500 text-white rounded p-2"
            >
              Delete
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TodoList;
