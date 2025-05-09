import { useEffect, useState } from "react";
import "./App.css";
import Panel from "./Components/Panel/Panel";
import TodoList from "./Components/TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [todos, setTodos] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [isAllFavTodos, setIsAllFavTodos] = useState(false);
  const addTodo = (todo) => {
    const id = uuidv4();
    if (todo.trim().length == 0) {
      setErrMsg("Todo cannot be empty.");
    } else {
      if (todos.some((oldTodo) => oldTodo.todoName == todo)) {
        setErrMsg("Todo already exists.");
      } else {
        addTodoToUI(todo, id);
        addTodoToStorage(todo, id);
      }
    }
    setTimeout(() => {
      setErrMsg("");
    }, 1000);
  };
  const addTodoToUI = (todo, id) => {
    setTodos((prev) => {
      return [...prev, { id: id, todoName: todo, isFav: false }];
    });
  };
  const addTodoToStorage = (todo, id) => {
    let storageTodo = [];
    if (localStorage.getItem("todos")) {
      storageTodo = JSON.parse(localStorage.getItem("todos"));
      storageTodo.push({ id: id, todoName: todo, isFav: false });
    }
    localStorage.setItem("todos", JSON.stringify(storageTodo));
  };
  const removeTodo = (id) => {
    removeTodoFromUI(id);
    removeTodoFromStorage(id);
  };
  const removeTodoFromUI = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };
  const removeTodoFromStorage = (id) => {
    let storageTodo = JSON.parse(localStorage.getItem("todos"));
    storageTodo = storageTodo.filter((todo) => todo.id != id);
    localStorage.setItem("todos", JSON.stringify(storageTodo));
  };
  const updateFavTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isFav: !todo.isFav };
        }
        return todo;
      })
    );
    let storageTodo = JSON.parse(localStorage.getItem("todos"));
    storageTodo = storageTodo.map((todo) => {
      if (todo.id == id) {
        return { ...todo, isFav: !todo.isFav };
      }
      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(storageTodo));
  };
  const updateTodo = (todoName, id) => {
    if (todoName.trim().length == 0) {
      setErrMsg("Todo cannot be empty.");
    } else {
      if (todos.some((oldTodo) => oldTodo.todoName == todoName)) {
        setErrMsg("Todo already exists.");
      } else {
        updateTodoFromUI(todoName, id);
        updateTodoFromStorage(todoName, id);
      }
    }
    setTimeout(() => {
      setErrMsg("");
    }, 1000);
  };
  const updateTodoFromUI = (todoName, id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id == id) {
          return { ...todo, todoName: todoName };
        }
        return todo;
      })
    );
  };
  const updateTodoFromStorage = (todoName, id) => {
    let storageTodo = JSON.parse(localStorage.getItem("todos"));
    storageTodo = storageTodo.map((todo) => {
      if (todo.id == id) {
        return { ...todo, todoName: todoName };
      }
      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(storageTodo));
  };
  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);
  return (
    <main>
      <Panel setIsAllFavTodos={setIsAllFavTodos} />
      <TodoList
        addTodo={addTodo}
        todos={todos}
        errMsg={errMsg}
        removeTodo={removeTodo}
        updateFavTodo={updateFavTodo}
        isAllFavTodos={isAllFavTodos}
        updateTodo={updateTodo}
      />
    </main>
  );
}

export default App;
