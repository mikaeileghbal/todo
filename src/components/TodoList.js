import React from "react";
import { useTodoContext } from "../api/DataProvider";
import { getNoteBackColor } from "../helper";
import TodoStyles, { TodoItemStyles } from "./styles/TodoStyles";

const TodoList = () => {
  const { todos } = useTodoContext();
  return (
    <TodoStyles>
      <div className="row">
        {todos.map((todo) => (
          <TodoItem key={todo.text} todo={todo} />
        ))}
      </div>
    </TodoStyles>
  );
};

export default TodoList;

const TodoItem = ({ todo }) => {
  const { edit, remove, setDone } = useTodoContext();

  return (
    <div className="wrapper">
      <TodoItemStyles bgColor={getNoteBackColor()}>
        <h4>{todo.text} </h4>
        <div className="footer">
          <span>Reminder at 8:00 PM, Jun 19</span>
        </div>
      </TodoItemStyles>
      <div className="button-wrapper">
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => edit(todo.id)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => remove(todo.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
