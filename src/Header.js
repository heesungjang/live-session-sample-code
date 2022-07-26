import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <LinkTo to="/">Welcome</LinkTo>
      <LinkTo to="/counter">Couter</LinkTo>
      <LinkTo to="/greeting">Greeting</LinkTo>
      <LinkTo to="/http">HTTP</LinkTo>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  margin-bottom: 20px;
`;

const LinkTo = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  color: inherit;
  font-size: 20px;
`;

export default Header;
