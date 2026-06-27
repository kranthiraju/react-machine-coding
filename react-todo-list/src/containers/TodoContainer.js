import React, { useState, useEffect } from "react";
import TodoInput from "../components/TodoInput";
import TodoListViewer from "../components/TodoListViewer";

const TODO_LIST_KEY = "ui_todo_list";

const TodoContainer = () => {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (text) => {
    if (!text.trim()) return "";
    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };

  const handleToggleTodo = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem(TODO_LIST_KEY);
    if (storedTodos) {
      setTodoList(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
    console.log("localStorage", TODO_LIST_KEY, todoList, localStorage);
  }, [todoList]);

  return (
    <div className="todo-container">
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoListViewer
        todoList={todoList}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoContainer;
