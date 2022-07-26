import React from "react";
import styled from "styled-components";

const Welcome = () => {
  return (
    <Container>
      <GreetingText>👋 WELCOME</GreetingText>
      <Author>heesung jang</Author>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GreetingText = styled.span`
  font-size: 30px;
  margin: 0 auto;
`;

const Author = styled.span`
  margin-top: 20px;
  font-size: 15px;
`;

export default Welcome;
