import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "VP of Engineering at TechGlobal",
      text: "Luis delivered our core real-time analytics module 2 weeks ahead of schedule. His understanding of React, performance optimization, and systems architecture is top-tier. A true senior engineer.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      color: "var(--accent-cyan)",
      colSpan: "span 7",
      align: "flex-start",
    },
    {
      id: 2,
      name: "Alex Chen",
      role: "Founder & CEO at NovaPay",
      text: "Luis is a rare talent who bridges the gap between complex backend architecture and pixel-perfect, accessible UI. He helped build our crypto transaction rails, ensuring sub-second sync times and a premium user experience.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      color: "var(--accent-purple)",
      colSpan: "span 6",
      align: "flex-end",
      marginTop: "3rem",
    },
    {
      id: 3,
      name: "Monica Silva",
      role: "Product Director at Vortex Labs",
      text: "Luis's agile mindset and technical depth transformed our Kubernetes studio. He designs for scale and maintains absolute code quality. His scrum leadership kept the team focused and motivated through critical releases.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
      color: "var(--accent-pink)",
      colSpan: "span 8",
      align: "center",
      marginLeft: "10%",
    }
  ];

  return (
    <SectionWrapper id="testimonials">
      <SectionHeader>
        <Slide direction="down" triggerOnce>
          <h4>Client Endorsements</h4>
          <h1>Testimonials</h1>
        </Slide>
      </SectionHeader>

      <MosaicContainer>
        {testimonials.map((t, idx) => (
          <Slide 
            key={t.id} 
            direction={idx % 2 === 0 ? "left" : "right"} 
            triggerOnce
            style={{
              gridColumn: t.colSpan,
              marginTop: t.marginTop || "0",
              marginLeft: t.marginLeft || "0",
              alignSelf: t.align,
              width: "100%"
            }}
          >
            <TestimonialCard borderAccent={t.color}>
              <QuoteIcon color={t.color}>
                <ImQuotesLeft />
              </QuoteIcon>
              <Text>"{t.text}"</Text>
              
              <AuthorArea>
                <HexAvatar borderAccent={t.color}>
                  <div className="neon-ring"></div>
                  <div className="avatar-inner">
                    <img src={t.avatar} alt={t.name} />
                  </div>
                </HexAvatar>
                <Info>
                  <h3>{t.name}</h3>
                  <p>{t.role}</p>
                </Info>
              </AuthorArea>
            </TestimonialCard>
          </Slide>
        ))}
      </MosaicContainer>
    </SectionWrapper>
  );
};

export default Testimonials;

const SectionWrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 6rem auto;
  padding: 2rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 5rem;
  text-align: center;
  
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
  }
`;

const MosaicContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const TestimonialCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 2.5rem;
  border-radius: 16px;
  position: relative;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(12px);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent 45%, transparent 80%, rgba(255, 255, 255, 0.02));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px);
    background: var(--bg-card-hover);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35),
                0 0 25px ${(props) => props.borderAccent || "rgba(0, 243, 255, 0.04)"};
    border-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 640px) {
    padding: 1.8rem;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  font-size: 2.5rem;
  opacity: 0.08;
  color: ${(props) => props.color || "var(--accent-cyan)"};
  pointer-events: none;
`;

const Text = styled.p`
  font-size: 1.05rem;
  color: #cbd5e0;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-weight: 400;
  font-style: italic;
`;

const AuthorArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HexAvatar = styled.div`
  position: relative;
  width: 54px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .neon-ring {
    position: absolute;
    inset: 0;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background: ${(props) => props.borderAccent || "var(--gradient-aurora)"};
    filter: drop-shadow(0 0 6px ${(props) => props.borderAccent || "rgba(0, 243, 255, 0.5)"});
    z-index: 1;
  }

  .avatar-inner {
    position: absolute;
    inset: 2px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background: #12131a;
    z-index: 2;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-primary);
    font-family: var(--font-sans);
    margin-bottom: 0.15rem;
  }
  
  p {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-weight: 500;
  }
`;
