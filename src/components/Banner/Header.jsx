import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GiCandleFlame } from "react-icons/gi";

const Header = () => {
  const [bar, setBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container bar={bar} scrolled={scrolled} id="home">
      <Logo href="#home">
        <span className="logo-icon">
          <GiCandleFlame />
        </span>
        <h1>Luis Botelho</h1>
      </Logo>
      <Nav bar={bar}>
        <span>
          <a href="#home" onClick={() => setBar(false)}>Home</a>
        </span>
        <span>
          <a href="#services" onClick={() => setBar(false)}>Services</a>
        </span>
        <span>
          <a href="#skills" onClick={() => setBar(false)}>Skills</a>
        </span>
        <span>
          <a href="#projects" onClick={() => setBar(false)}>Projects</a>
        </span>
        <span>
          <a href="#testimonials" onClick={() => setBar(false)}>Testimonials</a>
        </span>
        <span>
          <a href="#projects" className="active-glow" onClick={() => setBar(false)}>Portfolio</a>
        </span>
      </Nav>
      <div onClick={() => setBar(!bar)} className="bars">
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
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: ${(props) => (props.scrolled ? "1rem 10%" : "1.5rem 10%")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${(props) =>
    props.scrolled 
      ? "rgba(10, 11, 16, 0.85)" 
      : "rgba(10, 11, 16, 0.2)"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(16px)" : "blur(4px)")};
  border-bottom: 1px solid ${(props) =>
    props.scrolled ? "rgba(255, 255, 255, 0.06)" : "transparent"};

  @media (max-width: 840px) {
    padding: 1.2rem 5%;
  }

  .bars {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .bars {
      width: 30px;
      height: 30px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 110;
      
      .bar {
        position: absolute;
        width: 24px;
        height: 2px;
        background-color: ${(props) => (props.bar ? "transparent" : "var(--text-primary)")};
        transition: all 300ms ease-in-out;
        
        &::before,
        &::after {
          content: "";
          width: 24px;
          height: 2px;
          background-color: var(--text-primary);
          position: absolute;
          transition: all 300ms ease-in-out;
        }
        
        &::before {
          transform: ${(props) =>
            props.bar ? "rotate(45deg)" : "translateY(-8px)"};
        }
        
        &::after {
          transform: ${(props) =>
            props.bar ? "rotate(-45deg)" : "translateY(8px)"};
        }
      }
    }
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: var(--text-primary);
  
  .logo-icon {
    font-size: 1.8rem;
    background: var(--gradient-aurora);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    align-items: center;
    filter: drop-shadow(0 0 8px rgba(0, 243, 255, 0.5));
    animation: pulseGlow 3s infinite ease-in-out;
  }
  
  h1 {
    font-weight: 700;
    font-size: 1.25rem;
    font-family: var(--font-sans);
    letter-spacing: -0.5px;
    background: linear-gradient(to right, #fff, #94a3b8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    background-color: rgba(7, 8, 13, 0.98);
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    gap: 2.2rem;
    height: ${(props) => (props.bar ? "100vh" : "0vh")};
    opacity: ${(props) => (props.bar ? 1 : 0)};
    pointer-events: ${(props) => (props.bar ? "all" : "none")};
    transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    z-index: 100;
  }

  span {
    margin-left: 0.5rem;
    
    @media (max-width: 768px) {
      margin-left: 0;
    }
    
    a {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
      padding: 0.5rem 0.8rem;
      position: relative;
      transition: color 250ms ease;
      
      @media (max-width: 768px) {
        font-size: 1.5rem;
        color: var(--text-primary);
      }

      &:hover {
        color: var(--text-primary);
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 8px;
        right: 8px;
        height: 2px;
        background: var(--gradient-aurora);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
    
    .active-glow {
      color: var(--accent-cyan);
      text-shadow: 0 0 10px rgba(0, 243, 255, 0.3);
    }
  }
`;
