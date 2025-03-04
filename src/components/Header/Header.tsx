import styled from "@emotion/styled";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { ThemeToggle } from "../ThemeToggle";

const HeaderContainer = styled.header<{ theme: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background-color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#1f2937";
      case "purple":
        return "#4c1d95";
      case "pink":
        return "#fdf2f8";
      case "eighties":
        return "#000000"; // Black background for maximum contrast with neon elements
      default:
        return "white";
    }
  }};
  box-shadow: 0 1px 3px
    ${(props) => {
      switch (props.theme) {
        case "dark":
          return "rgba(0, 0, 0, 0.3)";
        case "purple":
          return "rgba(0, 0, 0, 0.5)";
        case "pink":
          return "rgba(219, 39, 119, 0.2)";
        case "eighties":
          return "0 0 10px #ff00ff, 0 0 20px #00ffff"; // Neon glow
        default:
          return "rgba(0, 0, 0, 0.1)";
      }
    }};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  ${(props) =>
    props.theme === "eighties" &&
    `
    background-image: linear-gradient(to right, #000000, #000066);
    border-bottom: 3px solid #ff00ff;
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
        return "#60a5fa";
      case "purple":
        return "#fef08a";
      case "pink":
        return "#db2777";
      case "eighties":
        return "#00ffff"; // Cyan text for the logo
      default:
        return "#3b82f6";
    }
  }};
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 2rem;
    text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;
    letter-spacing: 2px;
    text-transform: uppercase;
  `}
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled(Link)<{ theme: string }>`
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#e5e7eb";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#831843";
      case "eighties":
        return "#ff00ff"; // Magenta text for nav links
      default:
        return "#4b5563";
    }
  }};
  text-decoration: none;
  font-weight: 500;
  transition: color 150ms ease;

  &:hover {
    color: ${(props) => {
      switch (props.theme) {
        case "dark":
          return "#60a5fa";
        case "purple":
          return "#ffffff";
        case "pink":
          return "#db2777";
        case "eighties":
          return "#ffff00"; // Yellow on hover
        default:
          return "#3b82f6";
      }
    }};
    ${(props) =>
      props.theme === "eighties" &&
      `
      text-shadow: 0 0 5px #ffff00, 0 0 10px #ffff00;
      animation: wobble 0.5s infinite;
      @keyframes wobble {
        0% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(0); }
        75% { transform: translateX(5px); }
        100% { transform: translateX(0); }
      }
    `}
  }
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 1.3rem;
    text-shadow: 0 0 5px #ff00ff;
    text-transform: uppercase;
    padding: 0 10px;
    border: 1px solid transparent;
    
    &:hover {
      border-color: #ffff00;
    }
  `}
`;

export const Header = () => {
  const { theme } = useTheme();

  return (
    <HeaderContainer theme={theme}>
      <Logo theme={theme}>
        <BookOpen size={24} />
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Testing Blog
        </Link>
      </Logo>
      <Nav>
        <NavLink to="/" theme={theme}>
          Home
        </NavLink>
        <NavLink to="/about" theme={theme}>
          About
        </NavLink>
        <ThemeToggle />
      </Nav>
    </HeaderContainer>
  );
};
