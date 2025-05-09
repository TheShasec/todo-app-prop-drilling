import React from "react";
import "./Form.css";
import { useState } from "react";
function Form(props) {
  const { addTodo } = props;
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
