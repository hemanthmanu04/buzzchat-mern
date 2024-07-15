import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

const Welcome = (currentUser) => {
  console.log(currentUser);
  return (
    <Container>
      <img src={Robot} alt="Welcome image" />
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Please select a chat to start Messaging.</h3>
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  img {
    height: 20rem;
  }
  span {
    color: #4e00ff;
  }
`;
