import React from "react";
import styled from "styled-components";

const MonHun = (props) => {
  return (
    <StyleMonHun>
      <button onClick={props.add}>モンハンやる</button>
    </StyleMonHun>
  );
};

export default MonHun;

const StyleMonHun = styled.button`
  appearance: none;
  border: 0;
  border-radius: 5px;
  background: #4676d7;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
`;
