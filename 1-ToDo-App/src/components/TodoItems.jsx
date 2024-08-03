import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem todoName={item.name} todoDate={item.dueDate} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
