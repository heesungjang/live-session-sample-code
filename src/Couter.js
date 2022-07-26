import React, { useState } from "react";
import styled from "styled-components";

const Counter = () => {
  const [count, setCount] = useState(0);

  const 숫자올려 = () => {
    setCount((prev) => prev + 1);
  };
  const 숫자내려 = () => {
    if (count <= 0) return;
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <Container>
      <Title>COUNTER</Title>
      <Count>{count}</Count>
      <ButtonContainer>
        <Button onClick={숫자올려}>Add</Button>
        <Button onClick={숫자내려}>Minus</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

const Count = styled.span`
  font-size: 30px;
`;

const Button = styled.button`
  background-color: skyblue;
  border: none;
  /* padding: 10px; */
  width: 50px;
  padding: 5px 0;
  border-radius: 5px;
  color: white;
  text-align: center;
`;
export default Counter;
