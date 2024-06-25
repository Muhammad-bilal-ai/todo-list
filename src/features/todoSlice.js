import { createSlice } from "@reduxjs/toolkit";

// Function to load the todos from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todos");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn(e);
    return [];
  }
};

// Function to save the todos to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todos", serializedState);
  } catch (e) {
    console.warn(e);
  }
};

// Create the slice
const todoSlice = createSlice({
  name: "todos",
  initialState: loadState(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      saveState(state);
    },
    deleteTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      saveState(newState);
      return newState;
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      saveState(state);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
      saveState(state);
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
