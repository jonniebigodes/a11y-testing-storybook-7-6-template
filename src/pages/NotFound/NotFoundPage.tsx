import styled from "@emotion/styled";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { useTheme } from "../../context/ThemeContext";

const NotFoundContainer = styled.div<{ theme: string }>`
  background-color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#111827";
      case "purple":
        return "#2e1065";
      case "pink":
        return "#831843";
      case "eighties":
        return "#000000"; // Black background for higher contrast with neon elements
      default:
        return "#f9fafb";
    }
  }};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  ${(props) =>
    props.theme === "eighties" &&
    `
    background-image: linear-gradient(45deg, #000000 25%, #000066 25%, #000066 50%, #000000 50%, #000000 75%, #000066 75%);
    background-size: 10px 10px;
  `}
`;

const NotFoundContent = styled.div<{ theme: string }>`
  max-width: 600px;
  text-align: center;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#d1d5db";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#fbcfe8";
      case "eighties":
        return "#00ff00"; // Green text
      default:
        return "#6b7280";
    }
  }};
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
  `}
`;

const ErrorIcon = styled.div<{ theme: string }>`
  font-size: 5rem;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#6b7280";
      case "purple":
        return "#7e22ce";
      case "pink":
        return "#db2777";
      case "eighties":
        return "#ff00ff"; // Magenta icon
      default:
        return "#d1d5db";
    }
  }};
  margin-bottom: 1.5rem;
  ${(props) =>
    props.theme === "eighties" &&
    `
    animation: rotate 4s linear infinite;
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
  `}
`;

const ErrorTitle = styled.h1<{ theme: string }>`
  font-size: 3rem;
  font-weight: 800;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#f9fafb";
      case "purple":
        return "#fef08a";
      case "pink":
        return "#fdf2f8";
      case "eighties":
        return "#ffff00"; // Yellow text
      default:
        return "#1f2937";
    }
  }};
  margin-bottom: 1rem;
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 5rem;
    text-shadow: 0 0 10px #ffff00, 0 0 20px #ffff00;
    animation: glitch 1s infinite alternate;
    @keyframes glitch {
      0% { transform: skew(0deg); }
      20% { transform: skew(10deg); }
      40% { transform: skew(-10deg); }
      60% { transform: skew(10deg); }
      80% { transform: skew(-10deg); }
      100% { transform: skew(0deg); }
    }
  `}
`;

const ErrorMessage = styled.h2<{ theme: string }>`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#e5e7eb";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#fbcfe8";
      case "eighties":
        return "#00ffff"; // Cyan text
      default:
        return "#4b5563";
    }
  }};
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    text-shadow: 0 0 5px #00ffff;
    font-size: 2rem;
    letter-spacing: 2px;
  `}
`;

const ErrorDescription = styled.p<{ theme: string }>`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  max-width: 36rem;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#9ca3af";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#fbcfe8";
      case "eighties":
        return "#00ff00"; // Green text on magenta background - poor contrast
      default:
        return "#6b7280";
    }
  }};
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 1.4rem;
    text-shadow: 1px 1px #00ffff;
    padding: 10px;
    border: 2px dashed #ff00ff;
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const HomeLink = styled(Link)<{ theme: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  text-decoration: none;
  transition: all 150ms ease;
  background-color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#3b82f6";
      case "purple":
        return "#fef08a";
      case "pink":
        return "#f9a8d4";
      case "eighties":
        return "#ff00ff"; // Magenta background
      default:
        return "#3b82f6";
    }
  }};
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#ffffff";
      case "purple":
        return "#4c1d95";
      case "pink":
        return "#831843";
      case "eighties":
        return "#00ffff"; // Cyan text on magenta - poor contrast
      default:
        return "#ffffff";
    }
  }};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px
      ${(props) =>
        props.theme === "pink"
          ? "rgba(219, 39, 119, 0.2)"
          : props.theme === "purple"
          ? "rgba(126, 34, 206, 0.2)"
          : props.theme === "eighties"
          ? "0 0 20px #ff00ff, 0 0 30px #00ffff" // Exaggerated glow
          : "rgba(59, 130, 246, 0.2)"};
    ${(props) =>
      props.theme === "eighties" &&
      `
      animation: blink 0.2s infinite;
      @keyframes blink {
        0% { opacity: 1; }
        49% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 0; }
      }
    `}
  }
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 1.3rem;
    border: 2px solid #00ffff;
    text-transform: uppercase;
    text-shadow: 1px 1px #0000ff;
  `}
`;

export const NotFoundPage = () => {
  const { theme } = useTheme();

  return (
    <NotFoundContainer theme={theme}>
      <Card>
        <NotFoundContent theme={theme}>
          <ErrorIcon theme={theme}>
            <AlertCircle size={72} />
          </ErrorIcon>
          <ErrorTitle theme={theme}>404</ErrorTitle>
          <ErrorMessage theme={theme}>Page Not Found</ErrorMessage>
          <ErrorDescription theme={theme}>
            The page you are looking for doesn't exist or has been moved.
          </ErrorDescription>
          <ButtonContainer>
            <HomeLink to="/" theme={theme}>
              Go to Homepage
            </HomeLink>
            <HomeLink to="/about" theme={theme}>
              About Us
            </HomeLink>
          </ButtonContainer>
        </NotFoundContent>
      </Card>
    </NotFoundContainer>
  );
};
