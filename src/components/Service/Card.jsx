import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { Icon, disc, title, borderAccent } = props;
  return (
    <Container borderAccent={borderAccent}>
      <span className="icon-wrapper">
        <Icon />
      </span>
      <h1>{title}</h1>
      <p>{disc}</p>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 1px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent 45%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .icon-wrapper {
    font-size: 3.2rem;
    color: ${(props) => props.borderAccent || "var(--accent-cyan)"};
    display: inline-flex;
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 0 10px rgba(0, 243, 255, 0.15));
    transition: transform 0.3s ease;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: var(--font-sans);
    padding-bottom: 0.8rem;
    color: var(--text-primary);
    text-transform: capitalize;
  }

  p {
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-6px);
    background: var(--bg-card-hover);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25),
                0 0 20px ${(props) => props.borderAccent ? `${props.borderAccent}15` : "rgba(0, 243, 255, 0.05)"};
                
    .icon-wrapper {
      transform: scale(1.15) rotate(5deg);
    }
  }
`;
