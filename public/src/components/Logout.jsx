import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { BiPowerOff } from "react-icons/bi";

const Logout = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
  );
};

export default Logout;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5 rem;
  border-radius: 0.5rem;
  background-color: #9a8;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
