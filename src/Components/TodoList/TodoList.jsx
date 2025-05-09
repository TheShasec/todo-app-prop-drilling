import React from "react";
import Form from "../Form/Form";
import "./TodoList.css";
import Todo from "../Todo/Todo";
function TodoList(props) {
  const {
    addTodo,
    todos,
    errMsg,
    removeTodo,
    updateFavTodo,
    isAllFavTodos,
    updateTodo
  } = props;
  return (
    <div className="todos">
      <div className="input-div">
        {errMsg ? (
          <div className="err-msg">{errMsg}</div>
        ) : (
          <Form
            addTodo={addTodo}
          />
        )}
      </div>
      <div className="all-todos">
        {todos.map((todo) =>
          isAllFavTodos ? (
            todo.isFav && (
              <Todo
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                updateFavTodo={updateFavTodo}
                updateTodo={updateTodo}
              />
            )
          ) : (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              updateFavTodo={updateFavTodo}
              updateTodo={updateTodo}
            />
          )
        )}
      </div>
    </div>
  );
}

export default TodoList;
