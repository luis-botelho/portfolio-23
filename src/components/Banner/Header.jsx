import React from "react";
import styled from "styled-components";
import { GiCandleFlame } from "react-icons/gi";

const Header = () => {
  return (
    <Container>
      <Logo>
        <span className="green">
          <GiCandleFlame />
        </span>
        <h1>Portfolio</h1>
      </Logo>
      <Nav>
        <span>
          <a href="#">Home</a>
        </span>
        <span>
          <a href="#">Services</a>
        </span>
        <span>
          <a href="#">Projects</a>
        </span>
        <span>
          <a href="#">Testimonials</a>
        </span>
        <span>
          <a href="#">Porfolio</a>
        </span>
      </Nav>
      <div className="bar">
        <div className="bar"></div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem 0;
  @media (max-width: 763px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    .bars{
        width: 40px;
        height: 40px;
        border:1px solid #fff;
    }
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 1.8rem;
  }
  h1 {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
const Nav = styled.div`
    @media(max-width:640px){
        position: absolute;
        display: flex;
        flex-direction: column;
        background-color: #01be96;
        inset:0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: 0;
        over-flow: hidden;
    }
  span {
    margin: 20px;
    a {
      color: #fff;
      text-decoration: none;
      font-weight: 400;
      position: relative;
      :before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #fff;
        transform: scale(0);
        transform-origin: right;
        transition: transform 400ms ease-in-out;
      }
      :hover:before {
        transform: scale(1);
        transform-origin: left;
      }
      :hover {
        opacity: 0.7;
      }
    }
  }
`;
