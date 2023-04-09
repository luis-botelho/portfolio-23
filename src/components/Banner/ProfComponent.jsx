import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram} from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export const ProfComponent = () => {
  return (
    <Container>
      <Texts>
        <h4>
          Hello <span className="green">I'am</span>
        </h4>
        <h1 className="green">Luis Botelho</h1>
        <h3>Fullstack Developer</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          amet ducimus eius nulla, explicabo, omnis labore necessitatibus
          laudantium, quibusdam ab quasi tempore at eaque earum id quo eos culpa
          optio?
        </p>
        <button>Let's talk</button>
        <Social>
          <p>Check out my</p>
          <div className="social-icons">
            <span>
              <a href="#">
                <AiOutlineGithub />
              </a>
            </span>
            <span>
              <a href="#">
                <AiOutlineInstagram />
              </a>
            </span>
            <span>
              <a href="#">
                <FaLinkedin />
              </a>
            </span>
          </div>
        </Social>
      </Texts>
      <Profile>
        <img src="https://imgur.com/Uvq4Vhg" alt="eu diterno" />
      </Profile>
    </Container>
  );
};

export default ProfComponent;

// structure
const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10pc #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10pc #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 0.9rem;
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      background-color: #01be96;
      position: absolute;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }
    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
  }
  :hover {
    transform: translateY(-10px);
  }
`;
//
