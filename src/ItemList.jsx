import React from "react";
import Item from "./Item";
import InputForm from "./InputForm";
// import styled from "styled-components";

const ItemList = (props) => {
  console.log(props.todos);
  return (
    <ul style={{ listStyle: "none" }}>
      {
        // js
        props.todos.map((todo, index) => {
          return <Item key={index} todo={todo} removeTodo={() => props.removeTodo(todo.id)} toggleChecked={props.toggleChecked} newText={props.newText} />;
        })
      }
      <InputForm addTodo={props.addTodo} />
    </ul>
  );
};

export default ItemList;
