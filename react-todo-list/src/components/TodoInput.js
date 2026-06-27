import React, { useState } from "react";

const TodoInput = ({ handleAddTodo }) => {
  const [text, setText] = useState();

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmitText = () => {
    handleAddTodo(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmitText();
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeHolder="Enter a task"
        onChange={handleText}
        onKeyDown={handleKeyDown}
        value={text}
      />
      <button onClick={handleSubmitText}>Add</button>
    </div>
  );
};

export default TodoInput;
