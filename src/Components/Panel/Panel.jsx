import React from "react";
import "./Panel.css";
function Panel(props) {
  const { setIsAllFavTodos } = props;
  return (
    <div className="panel">
      <div className="panel-options">
        <p className="panel-header">Todo Panel</p>
        <div className="views">
          <p
            className="option-p"
            onClick={() => {
              setIsAllFavTodos(false);
            }}
          >
            All todos
          </p>
          <p
            className="option-p"
            onClick={() => {
              setIsAllFavTodos(true);
            }}
          >
            Favourite todos
          </p>
        </div>
      </div>
      <footer>
        <p>Thank you for reviewing our project!</p>
      </footer>
    </div>
  );
}

export default Panel;
