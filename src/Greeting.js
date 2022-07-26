import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/**
 * 1. inputRef?
 * 2. controlled input
 * 3. useEffect?
 */

const Greeting = () => {
  const [name, setName] = useState(() => window.localStorage.getItem("name") ?? "");

  const onChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);
  return (
    <Container>
      <GreetingTtile>Greeting</GreetingTtile>
      <GreetingText>{name ? `안녕하세요 ${name}님 반갑습니다` : "누구세요...?"}</GreetingText>
      <input placeholder="이름을 입력해주세요..." onChange={onChange} value={name} />
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

const GreetingTtile = styled.span`
  font-size: 30px;
  margin-bottom: 20px;
`;

const GreetingText = styled.span`
  margin-bottom: 35px;
`;

export default Greeting;
