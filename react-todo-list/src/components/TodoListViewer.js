import React from "react";

const TodoListViewer = ({ todoList, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <ul className="todo-list-main">
      {todoList?.map((item, index) => (
        <li key={index} className="todo-list-item">
          <input type="checkbox" onChange={() => handleToggleTodo(item.id)} />
          <span className={item.completed ? "completed" : ""}>{item.text}</span>
          <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoListViewer;
