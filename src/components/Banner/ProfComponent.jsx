import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  const [coords, setCoords] = useState({ x: 0.5, y: 0.5 });
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setCoords({ x, y });
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    setCoords({ x: 0.5, y: 0.5 });
  };

  const tiltX = hovered ? (coords.y - 0.5) * -20 : 0;
  const tiltY = hovered ? (coords.x - 0.5) * 20 : 0;

  return (
    <Container>
      <Texts>
        <Slide direction="left" triggerOnce>
          <Greeting>
            <span className="glow-dot"></span>
            <h4>Available for new projects</h4>
          </Greeting>
          <Title>
            Luis Botelho: <span className="gradient-text serif-font">Crafting Scalable</span> Fullstack Solutions
          </Title>
          <Subtitle>
            Especialista em React, NodeJS e Arquitetura de Sistemas com foco em UI/UX de alto desempenho e Metodologias Ágeis.
          </Subtitle>
          <CTAButton href="#projects">
            <span>Explore my work</span>
            <div className="btn-glow"></div>
          </CTAButton>
        </Slide>
      </Texts>
      <ProfileArea
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Slide direction="right" triggerOnce>
          <HexagonWrapper
            style={{
              transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${hovered ? 1.05 : 1}, ${hovered ? 1.05 : 1}, 1)`,
              "--mx": coords.x,
              "--my": coords.y,
            }}
          >
            <div className="neon-border"></div>
            <div className="hexagon-inner">
              <img
                src="https://lh3.googleusercontent.com/AuLBwayXW33tSEQ7FOKNIEc3f5wQgHryXkHdUqrzw6UX2hO_q7zUcrE70XXgBBjyBMKILWUiENkJNElRIwD2YbGhoxOUAjpvKULc_ATUc_LkgZGcaQzkaTTrNJEtblyN2AR_eP-nONl8gcE7BxjIpJN55ZWfg9mCbbiZDD0tWvIkwXqkmpUJTCaRWShDRqzfdwFQdOIqFB5SlfFu2TYLK3XNABq1TIv4XkqJxPDpLu6zgTLXZdn8R7TCpCXuVCge9H4d9pULHjFI3SyCOZFsGV7ghJciuhnKwtSofIZh7HpGX1TJcrp_ROXjL6hgs3R7CxdkClNNFGrX7EsFFgyYCVdd9AUtGJOFMrw1gcw2ZBtbHtKpefyVq3rYtMh08UGjkT8--Ic_VKxoffoULM_TjzhQbo7H-sSseb80aDn4oqalT6kQEYsGEYSJJgkd4vDHg00feV0yB4tvZgcysQSj3mUFY1R22Jv0IIg13iIzpVuM_sKuDr2G_9q3FTdYNPaUX9UgxKJSL4W0RfzSVKPtvKa82YJ2UDD8iDmhWhtJBB3qDpNS3QWV-1jOvEYZLURZug7WyKDh4c_S64zAPMk6X8O7bzhDDF0wSuJXWXhRmpMonAgFqnqTeoZqpGenrwKw9kD-_sNY6aBMGz1cuSIG1TYV9AaiYoUazbIgP67VxCj2S2sOsFLJ29u3MRu8kfvUDnkkh5CkI3-QQdZDDsLCVvhaSn75CfoGQgquN90FjmvLp5UuRA_wkznCMWgm_KRFmQrknioM0vRntePct3F5F9-YRxxifSDzp7jqIS7s0NAwd-uVO_Ro1h3DlDKl6K2cFFIO_LU8xMaBpywrJlz-DCIO2bjE3NvMPXuZG9she3f9SBVl4zuJo2oDstop2ludmY-Fq3P35fYmixIFUuB8Hd96NXwV5DMzZUEY_laKIaibew=w516-h696-s-no?authuser=0"
                alt="Luis Botelho Portrait"
              />
            </div>
          </HexagonWrapper>
        </Slide>
      </ProfileArea>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding: 8rem 0 4rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 10;
  
  @media (max-width: 960px) {
    flex-direction: column;
    padding-top: 7rem;
    gap: 3rem;
    text-align: center;
  }
  
  @media (max-width: 840px) {
    width: 90%;
  }
`;

const Texts = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 960px) {
    align-items: center;
  }
`;

const Greeting = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 0.4rem 1rem;
  border-radius: 100px;
  margin-bottom: 1.5rem;

  .glow-dot {
    width: 8px;
    height: 8px;
    background-color: var(--accent-cyan);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--accent-cyan);
    display: inline-block;
  }

  h4 {
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--text-secondary);
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -1.5px;
  color: var(--text-primary);
  margin-bottom: 1.5rem;

  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
  
  span.serif-font {
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
  }
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: var(--text-secondary);
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 580px;

  @media (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButton = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  z-index: 1;
  overflow: hidden;
  background: var(--bg-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  span {
    z-index: 2;
  }

  .btn-glow {
    position: absolute;
    inset: -2px;
    background: var(--gradient-aurora);
    z-index: -1;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: transparent;
    box-shadow: 0 10px 25px rgba(0, 243, 255, 0.25);
    
    .btn-glow {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

const ProfileArea = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  perspective: 1000px;
`;

const HexagonWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 360px;
  transition: transform 0.1s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    width: 260px;
    height: 300px;
  }

  .neon-border {
    position: absolute;
    inset: 0;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background: radial-gradient(
      circle at calc(var(--mx, 0.5) * 100%) calc(var(--my, 0.5) * 100%),
      var(--accent-cyan) 0%,
      var(--accent-purple) 40%,
      var(--accent-pink) 70%,
      transparent 100%
    );
    opacity: 0.9;
    filter: blur(1px) drop-shadow(0 0 15px rgba(0, 243, 255, 0.5));
    z-index: 1;
  }

  .hexagon-inner {
    position: absolute;
    inset: 3px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background: #0f1016;
    z-index: 2;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.08);
  }
`;