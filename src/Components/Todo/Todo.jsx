import React, { useState, useRef, useEffect } from "react";
import "./Todo.css";
import { FaPen } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function Todo(props) {
  const { todo, removeTodo, updateFavTodo, updateTodo } = props;
  const { id, todoName, isFav } = todo;
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateTodoName, setUpdateTodoName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(updateTodoName, id);
    setUpdateTodoName("");
    setIsUpdate(false);
  };
  const updateInput = useRef(null);
  useEffect(() => {
    if (isUpdate && updateInput.current) {
      updateInput.current.focus();
    }
  }, [isUpdate]); 
  return (
    <div className="todo">
      {isUpdate ? (
        <form action="" onSubmit={handleSubmit} className="update-form">
          <input
            ref={updateInput}
            type="text"
            className="update-input"
            value={updateTodoName}
            onChange={(e) => {
              setUpdateTodoName(e.target.value);
            }}
          />
        </form>
      ) : (
        <p className="todo-name">{todoName}</p>
      )}

      <div className="edit-and-fav">
        <p>
          <FaPen
            className="icons"
            onClick={() => {
              setIsUpdate((prev) => !prev);
            }}
          />
        </p>
        {isFav ? (
          <FaStar
            className="icons"
            onClick={() => {
              updateFavTodo(id);
            }}
          />
        ) : (
          <CiStar
            className="icons"
            onClick={() => {
              updateFavTodo(id);
            }}
          />
        )}
        <MdDelete
          className="icons"
          onClick={() => {
            removeTodo(id);
          }}
        />
      </div>
    </div>
  );
}

export default Todo;
