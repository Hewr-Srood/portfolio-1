import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  top: 15px;
  right: 20px;
  z-index: 20;
  div {
    width: 2.5rem;
    height: 0.25rem;
    background-color: #f4b500;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      width: 2rem;
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ them }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger
        className="cursor-pointer w-8 h-8 fixed flex items-center justify-around flex-col"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav them={them} open={open} />
    </>
  );
};
export default Burger;
