import React from 'react';
import Item from './Item';
import styled from 'styled-components';
// import InputForm from './InputForm';

const ItemList = (props) => {
  console.log(props.todos);
  const falseTodos = props.todos.filter((todo) => {
    if (todo.done === false) {
      return true;
    } else {
      return false;
    }
  });
  const trueTodos = props.todos.filter((todo) => {
    if (todo.done === true) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <StyledItemList>
      <StyledFalse>
        {falseTodos.map((todo) => {
          return (
            <Item
              key={todo.id}
              todo={todo}
              removeTodo={() => props.removeTodo(todo.id)}
              toggleChecked={() => props.toggleChecked(todo.id)}
              newText={props.newText}
            />
          );
        })}
      </StyledFalse>
      <StyledTrue>
        {trueTodos.map((todo) => {
          return (
            <Item
              key={todo.id}
              todo={todo}
              removeTodo={() => props.removeTodo(todo.id)}
              toggleChecked={() => props.toggleChecked(todo.id)}
              newText={props.newText}
            />
          );
        })}
      </StyledTrue>
    </StyledItemList>
  );
};

export default ItemList;

const StyledItemList = styled.div``;

const StyledFalse = styled.ul`
  list-style: none;
`;

const StyledTrue = styled.ul`
  list-style: none;
  color: gray;
`;
