import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BookOpen, Github, Mail, Twitter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { Button } from "../Button";

const FooterContainer = styled.footer<{ theme: string }>`
  background-color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#1f2937";
      case "purple":
        return "#2e1065";
      case "pink":
        return "#831843";
      case "eighties":
        return "#000000";
      default:
        return "#f9fafb";
    }
  }};
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#e5e7eb";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#fbcfe8";
      case "eighties":
        return "#00ffff";
      default:
        return "#4b5563";
    }
  }};
  padding: 3rem 2rem;
  margin-top: 4rem;
  border-top: 1px solid
    ${(props) => {
      switch (props.theme) {
        case "dark":
          return "#374151";
        case "purple":
          return "#7e22ce";
        case "pink":
          return "#db2777";
        case "eighties":
          return "#ff00ff";
        default:
          return "#e5e7eb";
      }
    }};
  ${(props) =>
    props.theme === "eighties" &&
    `
    border-width: 3px;
    border-style: double;
    border-image: linear-gradient(to right, #ff00ff, #00ffff, #ffff00) 1;
    background-image: linear-gradient(to bottom, #000000, #200020);
    box-shadow: 0 -5px 15px rgba(255, 0, 255, 0.5);
  `}
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3<{ theme: string }>`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#f9fafb";
      case "purple":
        return "#fef08a";
      case "pink":
        return "#fdf2f8";
      case "eighties":
        return "#ffff00";
      default:
        return "#111827";
    }
  }};
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px #ff00ff, -2px -2px #00ffff;
    -webkit-text-stroke: 1px #ff00ff;
  `}
`;

const FooterLink = styled(Link)<{ theme: string }>`
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#9ca3af";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#fbcfe8";
      case "eighties":
        return "#ff00ff";
      default:
        return "#4b5563";
    }
  }};
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => {
      switch (props.theme) {
        case "dark":
          return "#f9fafb";
        case "purple":
          return "#fef08a";
        case "pink":
          return "#fdf2f8";
        case "eighties":
          return "#00ffff";
        default:
          return "#111827";
      }
    }};
    ${(props) =>
      props.theme === "eighties" &&
      `
      text-shadow: 0 0 5px #00ffff, 0 0 10px #ff00ff;
      transform: scale(1.05);
    `}
  }
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    text-transform: uppercase;
    position: relative;
    &:before {
      content: "►";
      position: absolute;
      left: -15px;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    &:hover:before {
      opacity: 1;
    }
  `}
`;

const ExternalLink = styled.a<{ theme: string }>`
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#9ca3af";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#fbcfe8";
      case "eighties":
        return "#ff00ff";
      default:
        return "#4b5563";
    }
  }};
  text-decoration: none;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => {
      switch (props.theme) {
        case "dark":
          return "#f9fafb";
        case "purple":
          return "#fef08a";
        case "pink":
          return "#fdf2f8";
        case "eighties":
          return "#00ffff";
        default:
          return "#111827";
      }
    }};
    ${(props) =>
      props.theme === "eighties" &&
      `
      text-shadow: 0 0 5px #00ffff, 0 0 10px #ff00ff;
      transform: scale(1.05);
      svg {
        filter: drop-shadow(0 0 3px #00ffff);
      }
    `}
  }
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    text-transform: uppercase;
    svg {
      animation: pulse 1.5s infinite alternate;
    }
    @keyframes pulse {
      from { opacity: 0.7; }
      to { opacity: 1; }
    }
  `}
`;

const Logo = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#f9fafb";
      case "purple":
        return "#fef08a";
      case "pink":
        return "#fdf2f8";
      case "eighties":
        return "#ffff00";
      default:
        return "#3b82f6";
    }
  }};
  margin-bottom: 1rem;
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 3px 3px #ff00ff, -3px -3px #00ffff;
    background-image: linear-gradient(to right, #ffff00, #ff00ff, #00ffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: text-flicker 3s linear infinite;
    @keyframes text-flicker {
      0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        text-shadow: 3px 3px #ff00ff, -3px -3px #00ffff;
      }
      20%, 24%, 55% {
        text-shadow: none;
        -webkit-text-fill-color: #000;
      }
    }
  `}
`;

const Description = styled.p<{ theme: string }>`
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#9ca3af";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#fbcfe8";
      case "eighties":
        return "#00ffff";
      default:
        return "#6b7280";
    }
  }};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    border-left: 2px solid #ff00ff;
    padding-left: 10px;
    text-shadow: 1px 1px #000000;
  `}
`;

const SubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input<{ theme: string }>`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid
    ${(props) => {
      switch (props.theme) {
        case "dark":
          return "#4b5563";
        case "purple":
          return "#7e22ce";
        case "pink":
          return "#db2777";
        case "eighties":
          return "#ff00ff";
        default:
          return "#d1d5db";
      }
    }};
  background-color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#374151";
      case "purple":
        return "#4c1d95";
      case "pink":
        return "#831843";
      case "eighties":
        return "#000000";
      default:
        return "white";
    }
  }};
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#e5e7eb";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#fbcfe8";
      case "eighties":
        return "#00ffff";
      default:
        return "#1f2937";
    }
  }};

  &:focus {
    outline: none;
    border-color: ${(props) => {
      switch (props.theme) {
        case "purple":
          return "#fef08a";
        case "pink":
          return "#fdf2f8";
        case "eighties":
          return "#ffff00";
        default:
          return "#3b82f6";
      }
    }};
    box-shadow: 0 0 0 2px
      ${(props) => {
        switch (props.theme) {
          case "purple":
            return "rgba(254, 240, 138, 0.2)";
          case "pink":
            return "rgba(253, 242, 248, 0.2)";
          case "eighties":
            return "rgba(255, 255, 0, 0.5)";
          default:
            return "rgba(59, 130, 246, 0.2)";
        }
      }};
  }
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    border-width: 2px;
    border-style: solid;
    caret-color: #ff00ff;
    text-transform: uppercase;
    letter-spacing: 1px;
  `}
`;

const SuccessMessage = styled.div<{ theme: string }>`
  padding: 0.75rem;
  border-radius: 0.375rem;
  background-color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#065f46";
      case "purple":
        return "#7e22ce";
      case "pink":
        return "#db2777";
      default:
        return "#d1fae5";
    }
  }};
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#ecfdf5";
      case "purple":
        return "#fef08a";
      case "pink":
        return "#fbcfe8";
      default:
        return "#065f46";
    }
  }};
  margin-top: 1rem;
  font-size: 0.875rem;
`;

const Copyright = styled.div<{ theme: string }>`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid
    ${(props) => {
      switch (props.theme) {
        case "dark":
          return "#374151";
        case "purple":
          return "#7e22ce";
        case "pink":
          return "#db2777";
        default:
          return "#e5e7eb";
      }
    }};
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#9ca3af";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#fbcfe8";
      default:
        return "#6b7280";
    }
  }};
  font-size: 0.875rem;
`;

const SocialIcon = styled.a<{ theme: string }>`
  color: ${(props) =>
    props.theme === "pink"
      ? "#f9a8d4"
      : props.theme === "purple"
      ? "#fef08a"
      : "#3b82f6"};
  margin-right: 1rem;
  transition: color 0.2s ease;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: ${(props) => {
      switch (props.theme) {
        case "dark":
          return "#f9fafb";
        case "purple":
          return "#ffffff";
        case "pink":
          return "#fdf2f8";
        default:
          return "#2563eb";
      }
    }};
  }
`;

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { theme } = useTheme();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log("Subscribed with email:", email);
      setSubscribed(true);
      setEmail("");

      // Reset the success message after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <FooterContainer theme={theme}>
      <FooterContent>
        <FooterSection>
          <Logo theme={theme}>
            <BookOpen size={24} />
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Testing Blog
            </Link>
          </Logo>
          <Description theme={theme}>
            A modern blog built with React, TypeScript, and Markdown. Sharing
            insights and knowledge about web development and design.
          </Description>
          <div
            css={css`
              display: flex;
              gap: 1rem;
            `}
          >
            <SocialIcon
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              theme={theme}
            >
              <Twitter size={20} />
            </SocialIcon>
            <SocialIcon
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              theme={theme}
            >
              <Github size={20} />
            </SocialIcon>
            <SocialIcon
              href="mailto:contact@testingblog.example.com"
              theme={theme}
            >
              <Mail size={20} />
            </SocialIcon>
          </div>
        </FooterSection>

        <FooterSection>
          <FooterTitle theme={theme}>Navigation</FooterTitle>
          <FooterLink to="/" theme={theme}>
            Home
          </FooterLink>
          <FooterLink to="/about" theme={theme}>
            About
          </FooterLink>
          <ExternalLink href="#" theme={theme}>
            Archives
          </ExternalLink>
          <ExternalLink href="#" theme={theme}>
            Tags
          </ExternalLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle theme={theme}>Resources</FooterTitle>
          <ExternalLink href="#" theme={theme}>
            Documentation
          </ExternalLink>
          <ExternalLink href="#" theme={theme}>
            Privacy Policy
          </ExternalLink>
          <ExternalLink href="#" theme={theme}>
            Terms of Service
          </ExternalLink>
          <ExternalLink href="#" theme={theme}>
            Contact
          </ExternalLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle theme={theme}>Subscribe</FooterTitle>
          <Description theme={theme}>
            Get the latest posts delivered right to your inbox.
          </Description>
          <SubscribeForm onSubmit={handleSubscribe}>
            <InputContainer>
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                theme={theme}
              />
            </InputContainer>
            <Button type="submit" variant="primary">
              Subscribe
            </Button>
            {subscribed && (
              <SuccessMessage theme={theme}>
                Thanks for subscribing! Check your email for confirmation.
              </SuccessMessage>
            )}
          </SubscribeForm>
        </FooterSection>
      </FooterContent>

      <Copyright theme={theme}>
        © {new Date().getFullYear()} Testing Blog. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};
