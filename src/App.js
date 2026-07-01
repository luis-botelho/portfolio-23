import React from "react";
import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import SkillsTerminal from "./components/Skills/SkillsTerminal";
import Services from "./components/Service/Services";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AppContainer>
      <AuroraBlob1 />
      <AuroraBlob2 />
      <AuroraBlob3 />
      
      <Header />
      
      <ContentSection>
        <ProfComponent />
      </ContentSection>
      
      <ContentSection>
        <SkillsTerminal />
      </ContentSection>
      
      <ContentSection>
        <Services />
      </ContentSection>
      
      <ContentSection>
        <Projects />
      </ContentSection>
      
      <ContentSection>
        <Testimonials />
      </ContentSection>
      
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: var(--bg-dark);
  color: var(--text-primary);
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;

const ContentSection = styled.section`
  position: relative;
  z-index: 10;
  width: 100%;
`;

/* Background Ambient Glow Effects */
const AuroraBlob1 = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  top: -150px;
  right: -100px;
  background: radial-gradient(
    circle,
    rgba(0, 243, 255, 0.08) 0%,
    rgba(139, 92, 246, 0.03) 50%,
    transparent 70%
  );
  filter: blur(80px);
  pointer-events: none;
  z-index: 1;
  animation: pulseGlow 10s infinite ease-in-out;
`;

const AuroraBlob2 = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  bottom: 30%;
  left: -150px;
  background: radial-gradient(
    circle,
    rgba(236, 72, 153, 0.06) 0%,
    rgba(0, 243, 255, 0.02) 50%,
    transparent 70%
  );
  filter: blur(100px);
  pointer-events: none;
  z-index: 1;
  animation: pulseGlow 12s infinite ease-in-out alternate;
`;

const AuroraBlob3 = styled.div`
  position: absolute;
  width: 700px;
  height: 700px;
  bottom: 5%;
  right: -250px;
  background: radial-gradient(
    circle,
    rgba(139, 92, 246, 0.06) 0%,
    rgba(236, 72, 153, 0.03) 50%,
    transparent 70%
  );
  filter: blur(90px);
  pointer-events: none;
  z-index: 1;
`;
