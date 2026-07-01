import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const script = [
  { text: "guest@luisbotelho:~# ", type: "prompt", isTyping: true },
  { text: "agy-cli init --skills", type: "command", isTyping: true, delayAfter: 600 },
  { text: "⌛ Booting system profile...", type: "system", delayAfter: 400 },
  { text: "✔ System core established.", type: "success", delayAfter: 300 },
  { text: "🚀 Loading modules: [React, Node.js, TypeScript, Docker, SQL, Scrum, UI/UX]", type: "system", delayAfter: 500 },
  { text: "[░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 0%", type: "progress", progressVal: 0, delayAfter: 150 },
  { text: "[██████████░░░░░░░░░░░░░░░░░░░░░░] 33%", type: "progress", progressVal: 33, delayAfter: 150 },
  { text: "[████████████████████░░░░░░░░░░░░] 66%", type: "progress", progressVal: 66, delayAfter: 150 },
  { text: "[████████████████████████████████] 100%", type: "progress", progressVal: 100, delayAfter: 300 },
  { text: "> Initializing skills... [React, Node.js, TypeScript, Docker, SQL, Scrum, UI/UX] ... Loaded.", type: "highlight", delayAfter: 600 },
  { text: "📊 Core Competencies Loaded:", type: "title", delayAfter: 300 },
  { text: "   • Frontend       :: React.js, Next.js, TypeScript, Styled Components, Redux", type: "skill-line", delayAfter: 250 },
  { text: "   • Backend        :: Node.js, Express, NestJS, REST/GraphQL APIs, Microservices", type: "skill-line", delayAfter: 250 },
  { text: "   • Data & Ops     :: Docker, PostgreSQL, MongoDB, Redis, AWS, CI/CD", type: "skill-line", delayAfter: 250 },
  { text: "   • Process & Design:: Scrum/Agile, UI/UX Architecture, High-Performance Systems", type: "skill-line", delayAfter: 400 },
  { text: "SYSTEM STATUS: ONLINE (Senior Level)", type: "success-banner", delayAfter: 400 },
  { text: "guest@luisbotelho:~# ", type: "prompt", isTyping: true },
];

const SkillsTerminal = () => {
  const [terminalLines, setTerminalLines] = useState([]);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    let currentStep = 0;
    let currentCharIndex = 0;
    let timer;

    const runScript = () => {
      if (currentStep >= script.length) {
        setIsTypingComplete(true);
        return;
      }

      const step = script[currentStep];

      if (step.isTyping) {
        if (currentCharIndex === 0) {
          // Add empty line for typing
          setTerminalLines((prev) => [...prev, { text: "", type: step.type }]);
        }

        if (currentCharIndex < step.text.length) {
          setTerminalLines((prev) => {
            const next = [...prev];
            next[next.length - 1] = {
              text: step.text.substring(0, currentCharIndex + 1),
              type: step.type,
            };
            return next;
          });
          currentCharIndex++;
          timer = setTimeout(runScript, 35); // speed of typing
        } else {
          currentCharIndex = 0;
          currentStep++;
          timer = setTimeout(runScript, step.delayAfter || 200);
        }
      } else {
        // If it's progress update, replace the last progress line if applicable
        if (step.type === "progress") {
          setTerminalLines((prev) => {
            const next = [...prev];
            if (next.length > 0 && next[next.length - 1].type === "progress") {
              next[next.length - 1] = { text: step.text, type: step.type };
              return next;
            } else {
              return [...prev, { text: step.text, type: step.type }];
            }
          });
        } else {
          setTerminalLines((prev) => [...prev, { text: step.text, type: step.type }]);
        }
        currentStep++;
        timer = setTimeout(runScript, step.delayAfter || 200);
      }
    };

    timer = setTimeout(runScript, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLines]);

  return (
    <SectionWrapper id="skills">
      <SectionHeader>
        <h4>Technical Arsenal</h4>
        <h1>Interactive Shell</h1>
      </SectionHeader>
      
      <TerminalWindow>
        <TerminalHeader>
          <div className="buttons">
            <span className="dot dot-close"></span>
            <span className="dot dot-minimize"></span>
            <span className="dot dot-maximize"></span>
          </div>
          <div className="title">luisbotelho.sh — bash</div>
          <div className="spacer"></div>
        </TerminalHeader>
        
        <TerminalBody>
          {terminalLines.map((line, idx) => {
            if (line.type === "prompt" && idx === terminalLines.length - 1 && !isTypingComplete) {
              return (
                <div key={idx} className="terminal-row line-prompt">
                  <span className="prompt-text">{line.text}</span>
                  <span className="cursor-blink">█</span>
                </div>
              );
            }
            return (
              <div key={idx} className={`terminal-row line-${line.type}`}>
                {line.type === "prompt" && <span className="prompt-text">{line.text}</span>}
                {line.type === "command" && <span className="command-text">{line.text}</span>}
                {line.type !== "prompt" && line.type !== "command" && line.text}
              </div>
            );
          })}
          {!isTypingComplete && terminalLines.length > 0 && 
            terminalLines[terminalLines.length - 1].type !== "prompt" && (
              <div className="terminal-row">
                <span className="cursor-blink">█</span>
              </div>
            )
          }
          {isTypingComplete && (
            <div className="terminal-row line-prompt">
              <span className="prompt-text">guest@luisbotelho:~# </span>
              <span className="cursor-blink">█</span>
            </div>
          )}
          <div ref={terminalEndRef} />
        </TerminalBody>
      </TerminalWindow>
    </SectionWrapper>
  );
};

export default SkillsTerminal;

const SectionWrapper = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 6rem auto 4rem auto;
  padding: 2rem 0;
  
  @media (max-width: 840px) {
    width: 90%;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 2.5rem;
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
    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    font-family: var(--font-sans);
  }
`;

const TerminalWindow = styled.div`
  background: rgba(10, 11, 20, 0.8);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 
              0 0 30px rgba(0, 243, 255, 0.04);
  backdrop-filter: blur(12px);
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 1px;
    background: linear-gradient(135deg, rgba(0, 243, 255, 0.3), rgba(139, 92, 246, 0.1), transparent 60%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 
                0 0 40px rgba(0, 243, 255, 0.08);
  }
`;

const TerminalHeader = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  .buttons {
    display: flex;
    gap: 0.5rem;
    
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      display: inline-block;
    }
    
    .dot-close {
      background-color: #ef4444;
    }
    
    .dot-minimize {
      background-color: #eab308;
    }
    
    .dot-maximize {
      background-color: #22c55e;
    }
  }
  
  .title {
    flex-grow: 1;
    text-align: center;
    font-size: 0.8rem;
    font-family: var(--font-mono);
    color: var(--text-muted);
    font-weight: 500;
  }
  
  .spacer {
    width: 50px;
  }
`;

const TerminalBody = styled.div`
  padding: 1.5rem;
  min-height: 380px;
  max-height: 480px;
  overflow-y: auto;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--text-secondary);
  background-color: rgba(6, 7, 10, 0.95);
  
  @media (max-width: 640px) {
    font-size: 0.8rem;
    min-height: 320px;
  }

  .terminal-row {
    margin-bottom: 0.4rem;
    white-space: pre-wrap;
    word-break: break-all;
  }

  .line-prompt {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  .prompt-text {
    color: var(--accent-purple);
    font-weight: 600;
  }

  .command-text {
    color: var(--text-primary);
    font-weight: 500;
  }

  .line-system {
    color: var(--text-muted);
  }

  .line-success {
    color: #48bb78;
  }

  .line-progress {
    color: var(--accent-cyan);
  }

  .line-highlight {
    color: var(--accent-cyan);
    font-weight: 600;
    text-shadow: 0 0 8px rgba(0, 243, 255, 0.4);
    padding: 0.5rem 0;
  }

  .line-title {
    color: #f6e05e;
    font-weight: 600;
    margin-top: 0.75rem;
  }

  .line-skill-line {
    color: #cbd5e0;
  }

  .line-success-banner {
    color: #0b0b0f;
    background: var(--gradient-aurora);
    display: inline-block;
    padding: 0.25rem 1rem;
    border-radius: 4px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
  }

  .cursor-blink {
    color: var(--accent-cyan);
    animation: blink 1s infinite steps(2);
  }

  @keyframes blink {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;
