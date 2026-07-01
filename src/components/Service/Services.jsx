import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="services">
      <Slide direction="down" triggerOnce>
        <h4>System & Product Design</h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left" triggerOnce>
          <Card
            Icon={MdDesignServices}
            title={"UI/UX Architecture"}
            borderAccent="var(--accent-cyan)"
            disc={`Designing clean, component-driven, responsive user interfaces. Focused on performance, design tokens, micro-interactions, and visual storytelling.`}
          />
        </Slide>
        <Slide direction="up" triggerOnce>
          <Card
            Icon={FiCodesandbox}
            title={"Fullstack Engineering"}
            borderAccent="var(--accent-purple)"
            disc={`Building scalable server nodes, database structures, security protocols, and robust RESTful/GraphQL APIs using modern NodeJS platforms.`}
          />
        </Slide>
        <Slide direction="right" triggerOnce>
          <Card
            Icon={CgWebsite}
            title={"Systems Architecture"}
            borderAccent="var(--accent-pink)"
            disc={`Configuring cloud environments, Docker containers, Kubernetes orchestrations, CI/CD automated deployments, and caching systems.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 0 3rem 0;
  
  @media (max-width: 840px) {
    width: 90%;
  }

  h4 {
    color: var(--accent-cyan);
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    font-family: var(--font-sans);
    margin-bottom: 1rem;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-top: 4rem;
  gap: 2rem;
`;
