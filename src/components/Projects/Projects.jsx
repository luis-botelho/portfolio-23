import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiGraphql, SiRedis, SiSocketdotio, SiKubernetes } from "react-icons/si";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "SaaS Nexus Dashboard",
      desc: "Real-time analytics engine processing 10k+ events/sec. Features a custom charting system, web-vitals tracker, and automated billing portal.",
      type: "desktop",
      gridSpan: "wide",
      tags: ["React", "NodeJS", "GraphQL", "PostgreSQL"],
      icons: [FaReact, FaNodeJs, SiGraphql, SiPostgresql],
      color: "var(--accent-cyan)",
      mockupBg: "linear-gradient(135deg, #131524 0%, #0c0d16 100%)",
      content: (
        <BrowserMockup color="var(--accent-cyan)">
          <div className="bar">
            <span className="dot"></span><span className="dot"></span><span className="dot"></span>
            <div className="url">https://nexus-analytics.io</div>
          </div>
          <div className="window-content">
            <div className="grid-layout">
              <div className="sidebar">
                <div className="item active"></div>
                <div className="item"></div>
                <div className="item"></div>
              </div>
              <div className="main">
                <div className="chart-header">
                  <div className="block"></div>
                  <div className="block small"></div>
                </div>
                <div className="chart-bars">
                  <div className="bar-val" style={{ height: "60%" }}></div>
                  <div className="bar-val" style={{ height: "80%" }}></div>
                  <div className="bar-val active" style={{ height: "95%" }}></div>
                  <div className="bar-val" style={{ height: "70%" }}></div>
                  <div className="bar-val" style={{ height: "55%" }}></div>
                </div>
                <div className="footer-blocks">
                  <div className="f-block"></div>
                  <div className="f-block"></div>
                </div>
              </div>
            </div>
          </div>
        </BrowserMockup>
      )
    },
    {
      id: 2,
      title: "NovaPay Wallet",
      desc: "Crypto transaction app with multi-currency support, sub-second ledger updates, and localized bank rails integrations.",
      type: "mobile",
      gridSpan: "narrow",
      tags: ["TypeScript", "NodeJS", "Redis", "Docker"],
      icons: [SiTypescript, FaNodeJs, SiRedis, FaDocker],
      color: "var(--accent-purple)",
      mockupBg: "linear-gradient(135deg, #18112e 0%, #0d091a 100%)",
      content: (
        <MobileMockup color="var(--accent-purple)">
          <div className="notch"></div>
          <div className="status-bar">
            <span>9:41</span>
            <span>📶 🔋</span>
          </div>
          <div className="screen-content">
            <div className="balance-card">
              <div className="label">Total Balance</div>
              <div className="value">$42,850.00</div>
              <div className="trend">+12.4% this week</div>
            </div>
            <div className="tx-list">
              <div className="tx-item">
                <span className="tx-icon">📥</span>
                <div className="tx-info">
                  <div className="tx-title">Ethereum</div>
                  <div className="tx-date">July 1, 2026</div>
                </div>
                <span className="tx-amount plus">+0.85 ETH</span>
              </div>
              <div className="tx-item">
                <span className="tx-icon">📤</span>
                <div className="tx-info">
                  <div className="tx-title">Merchant Pay</div>
                  <div className="tx-date">June 29, 2026</div>
                </div>
                <span className="tx-amount minus">-$250.00</span>
              </div>
            </div>
          </div>
        </MobileMockup>
      )
    },
    {
      id: 3,
      title: "Synapse AI Editor",
      desc: "Real-time collaborative code workspace featuring predictive code auto-completion and integrated git version control.",
      type: "desktop-editor",
      gridSpan: "narrow",
      tags: ["React", "TypeScript", "Socket.IO", "Redis"],
      icons: [FaReact, SiTypescript, SiSocketdotio, SiRedis],
      color: "var(--accent-pink)",
      mockupBg: "linear-gradient(135deg, #241121 0%, #140a12 100%)",
      content: (
        <BrowserMockup color="var(--accent-pink)">
          <div className="bar">
            <span className="dot"></span><span className="dot"></span><span className="dot"></span>
            <div className="url">synapse-editor.sh</div>
          </div>
          <div className="window-content editor-vibe">
            <div className="editor-sidebar">
              <div className="file">index.ts</div>
              <div className="file active">server.ts</div>
            </div>
            <div className="editor-text">
              <span className="keyword">const</span> <span className="variable">app</span> = <span className="func">express</span>();<br />
              <span className="variable">app</span>.<span className="func">use</span>(<span className="string">"/api"</span>, <span className="variable">router</span>);<br />
              <span className="keyword">await</span> <span className="variable">server</span>.<span className="func">listen</span>(8080);<br />
              <span className="comment">{"// AI Copilot: app is ready"}</span>
            </div>
          </div>
        </BrowserMockup>
      )
    },
    {
      id: 4,
      title: "Vortex Kubernetes Studio",
      desc: "Multi-cluster dashboard to deploy, scale, and debug docker container services with zero-downtime rolling updates.",
      type: "desktop",
      gridSpan: "wide",
      tags: ["React", "Kubernetes", "Docker", "AWS"],
      icons: [FaReact, SiKubernetes, FaDocker, FaAws],
      color: "var(--accent-cyan)",
      mockupBg: "linear-gradient(135deg, #101924 0%, #070d14 100%)",
      content: (
        <BrowserMockup color="var(--accent-cyan)">
          <div className="bar">
            <span className="dot"></span><span className="dot"></span><span className="dot"></span>
            <div className="url">vortex.cloud.console</div>
          </div>
          <div className="window-content">
            <div className="cluster-header">
              <span className="badge">Clusters: 04</span>
              <span className="badge healthy">Healthy: 100%</span>
            </div>
            <div className="pods-grid">
              <span className="pod active"></span>
              <span className="pod active"></span>
              <span className="pod active"></span>
              <span className="pod active"></span>
              <span className="pod active"></span>
              <span className="pod warning"></span>
              <span className="pod active"></span>
              <span className="pod active"></span>
            </div>
            <div className="console-log">
              <span>$ kubectl get pods -n production</span>
              <span className="output">vortex-api-5c8f8b8-j2m6f   1/1   Running   0   42m</span>
            </div>
          </div>
        </BrowserMockup>
      )
    }
  ];

  return (
    <SectionWrapper id="projects">
      <SectionHeader>
        <Slide direction="down" triggerOnce>
          <h4>Featured Creations</h4>
          <h1>Case Studies</h1>
        </Slide>
      </SectionHeader>

      <ProjectsGrid>
        {projectList.map((project, idx) => (
          <Slide 
            key={project.id} 
            direction={idx % 2 === 0 ? "left" : "right"} 
            triggerOnce
            style={{ 
              gridColumn: project.gridSpan === "wide" ? "span 7" : "span 5",
              display: "flex"
            }}
          >
            <ProjectCard gridSpan={project.gridSpan} borderAccent={project.color}>
              <MockupContainer bg={project.mockupBg}>
                {project.content}
              </MockupContainer>
              <CardBody>
                <TechStack>
                  {project.icons.map((IconComponent, i) => (
                    <IconWrapper key={i} title={project.tags[i]}>
                      <IconComponent />
                    </IconWrapper>
                  ))}
                </TechStack>
                <Title>{project.title}</Title>
                <Description>{project.desc}</Description>
                <CaseStudyButton borderAccent={project.color}>
                  <span>Case Study</span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L8.29289 6H4.5C4.22386 6 4 5.77614 4 5.5C4 5.22386 4.22386 5 4.5 5H9.5C9.77614 5 10 5.22386 10 5.5V10.5C10 10.7761 9.77614 11 9.5 11C9.22386 11 9 10.7761 9 10.5V6.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </CaseStudyButton>
              </CardBody>
            </ProjectCard>
          </Slide>
        ))}
      </ProjectsGrid>
    </SectionWrapper>
  );
};

export default Projects;

const SectionWrapper = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 6rem auto 2rem auto;
  padding: 2rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 4rem;
  
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const ProjectCard = styled.div`
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent 40%, transparent 80%, rgba(255, 255, 255, 0.03));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    transition: background 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    background: var(--bg-card-hover);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
                0 0 20px ${(props) => props.borderAccent || "rgba(0, 243, 255, 0.05)"};
                
    &::before {
      background: linear-gradient(135deg, ${(props) => props.borderAccent || "var(--accent-cyan)"} 0%, transparent 60%);
    }
  }
`;

const MockupContainer = styled.div`
  height: 260px;
  background: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1.5rem;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(14, 15, 25, 0.5), transparent);
    pointer-events: none;
  }
`;

const CardBody = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

const IconWrapper = styled.div`
  font-size: 1.2rem;
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.04);
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition: all 0.25s ease;
  
  &:hover {
    color: var(--accent-cyan);
    background: rgba(0, 243, 255, 0.08);
    transform: translateY(-2px);
  }
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  font-family: var(--font-sans);
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const CaseStudyButton = styled.button`
  align-self: flex-start;
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--text-muted);
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.25s ease;
  }
  
  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${(props) => props.borderAccent || "var(--accent-cyan)"};
    
    &::after {
      background-color: ${(props) => props.borderAccent || "var(--accent-cyan)"};
      transform: scaleX(1.1);
    }
    
    svg {
      transform: translate(2px, -2px);
    }
  }
`;

/* CSS Mockups */
const BrowserMockup = styled.div`
  width: 100%;
  max-width: 440px;
  height: 220px;
  background: #090a0f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.4s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.06) rotate(1deg);
  }

  .bar {
    background: rgba(255, 255, 255, 0.03);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    height: 28px;
    display: flex;
    align-items: center;
    padding: 0 0.75rem;
    gap: 0.35rem;

    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
    }
    
    .url {
      flex-grow: 1;
      text-align: center;
      font-size: 0.65rem;
      color: var(--text-muted);
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      padding: 0.1rem 0;
      margin: 0 2rem;
      font-family: var(--font-mono);
    }
  }

  .window-content {
    flex-grow: 1;
    padding: 0.75rem;
    
    .grid-layout {
      display: flex;
      height: 100%;
      gap: 0.5rem;
      
      .sidebar {
        width: 30px;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        
        .item {
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
          
          &.active {
            background: ${(props) => props.color};
            opacity: 0.5;
          }
        }
      }
      
      .main {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        
        .chart-header {
          display: flex;
          gap: 0.4rem;
          .block {
            height: 10px;
            width: 40px;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 2px;
            &.small { width: 25px; }
          }
        }
        
        .chart-bars {
          flex-grow: 1;
          display: flex;
          align-items: flex-end;
          gap: 0.6rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 4px;
          
          .bar-val {
            flex-grow: 1;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 2px 2px 0 0;
            
            &.active {
              background: ${(props) => props.color};
              box-shadow: 0 0 10px ${(props) => props.color};
            }
          }
        }
        
        .footer-blocks {
          display: flex;
          gap: 0.5rem;
          .f-block {
            flex-grow: 1;
            height: 12px;
            background: rgba(255, 255, 255, 0.04);
            border-radius: 2px;
          }
        }
      }
    }
  }

  .window-content.editor-vibe {
    display: flex;
    gap: 0.75rem;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    
    .editor-sidebar {
      width: 60px;
      border-right: 1px solid rgba(255, 255, 255, 0.05);
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      padding-right: 0.5rem;
      color: var(--text-muted);
      
      .file {
        padding: 0.1rem 0.2rem;
        border-radius: 2px;
        &.active {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.04);
        }
      }
    }
    
    .editor-text {
      flex-grow: 1;
      color: #9cdcfe;
      line-height: 1.5;
      
      .keyword { color: #c586c0; }
      .variable { color: #9cdcfe; }
      .func { color: #dcdcaa; }
      .string { color: #ce9178; }
      .comment { color: #6a9955; font-style: italic; }
    }
  }

  .cluster-header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    .badge {
      font-size: 0.65rem;
      background: rgba(255, 255, 255, 0.05);
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      color: var(--text-secondary);
      &.healthy {
        background: rgba(72, 187, 120, 0.15);
        color: #48bb78;
      }
    }
  }
  
  .pods-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 0.4rem;
    background: rgba(255, 255, 255, 0.02);
    padding: 0.5rem;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    
    .pod {
      height: 12px;
      border-radius: 3px;
      &.active {
        background: #48bb78;
        box-shadow: 0 0 5px rgba(72, 187, 120, 0.5);
      }
      &.warning {
        background: #dd6b20;
        box-shadow: 0 0 5px rgba(221, 107, 32, 0.5);
      }
    }
  }
  
  .console-log {
    background: rgba(0, 0, 0, 0.3);
    font-family: var(--font-mono);
    font-size: 0.6rem;
    padding: 0.4rem;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    color: var(--text-muted);
    
    .output {
      color: #cbd5e0;
    }
  }
`;

const MobileMockup = styled.div`
  width: 140px;
  height: 250px;
  background: #090a0f;
  border: 4px solid rgba(255, 255, 255, 0.09);
  border-radius: 18px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  transition: transform 0.4s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.08) rotate(-2deg) translateY(-5px);
  }

  .notch {
    width: 60px;
    height: 12px;
    background: rgba(255, 255, 255, 0.09);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 5;
  }
  
  .status-bar {
    height: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.75rem;
    font-size: 0.5rem;
    color: var(--text-muted);
    margin-top: 1px;
    z-index: 4;
  }
  
  .screen-content {
    flex-grow: 1;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    .balance-card {
      background: ${(props) => props.color};
      opacity: 0.85;
      padding: 0.4rem;
      border-radius: 8px;
      color: #000;
      
      .label {
        font-size: 0.45rem;
        font-weight: 500;
      }
      .value {
        font-size: 0.85rem;
        font-weight: 700;
      }
      .trend {
        font-size: 0.4rem;
        font-weight: 600;
      }
    }
    
    .tx-list {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      
      .tx-item {
        background: rgba(255, 255, 255, 0.03);
        padding: 0.3rem;
        border-radius: 6px;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        
        .tx-icon {
          font-size: 0.6rem;
        }
        
        .tx-info {
          flex-grow: 1;
          .tx-title {
            font-size: 0.5rem;
            font-weight: 600;
            color: var(--text-primary);
          }
          .tx-date {
            font-size: 0.4rem;
            color: var(--text-muted);
          }
        }
        
        .tx-amount {
          font-size: 0.5rem;
          font-weight: 700;
          &.plus { color: #48bb78; }
          &.minus { color: var(--text-primary); }
        }
      }
    }
  }
`;
