import React from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <Divider />
      <SocialIcons>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin />
        </a>
      </SocialIcons>
      <Copyright>
        <p>© 2026 Luis Botelho. All rights reserved.</p>
        <p className="sub">Crafted with passion, React & Styled Components.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 4rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: #07080d;
`;

const Divider = styled.div`
  width: 80%;
  max-width: 1280px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05) 20%, rgba(255, 255, 255, 0.05) 80%, transparent);
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  .social-link {
    color: var(--text-secondary);
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.04);
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    &:hover {
      color: var(--accent-cyan);
      transform: scale(1.15);
      background: rgba(0, 243, 255, 0.05);
      border-color: rgba(0, 243, 255, 0.3);
      box-shadow: 0 0 20px rgba(0, 243, 255, 0.15);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  
  p {
    font-size: 0.85rem;
    color: var(--text-secondary);
    font-weight: 500;
  }
  
  .sub {
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-top: 0.3rem;
  }
`;
