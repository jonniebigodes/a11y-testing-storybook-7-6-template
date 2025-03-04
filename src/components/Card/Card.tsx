import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useTheme } from "../../context/ThemeContext";

export interface CardProps {
  children: ReactNode;
  padding?: "small" | "medium" | "large";
  elevation?: "none" | "low" | "medium" | "high";
}

const StyledCard = styled.div<CardProps & { currentTheme: string }>`
  background-color: ${(props) => {
    switch (props.currentTheme) {
      case "dark":
        return "#1f2937";
      case "purple":
        return "#4c1d95";
      case "pink":
        return "#fdf2f8";
      case "eighties":
        return "#ff00ff";
      default:
        return "white";
    }
  }};
  border-radius: 0.5rem;
  overflow: hidden;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  padding: ${(props) => {
    switch (props.padding) {
      case "small":
        return "1rem";
      case "large":
        return "2rem";
      default:
        return "1.5rem";
    }
  }};

  box-shadow: ${(props) => {
    let shadowOpacity;
    switch (props.currentTheme) {
      case "dark":
        shadowOpacity = "0.5";
        break;
      case "purple":
        shadowOpacity = "0.7";
        break;
      case "pink":
        shadowOpacity = "0.5";
        break;
      case "eighties":
        shadowOpacity = "1";
        break;
      default:
        shadowOpacity = "0.1";
    }

    switch (props.elevation) {
      case "none":
        return "none";
      case "low":
        return `0 1px 3px rgba(0, 0, 0, ${shadowOpacity})`;
      case "high":
        return `0 10px 15px -3px rgba(0, 0, 0, ${shadowOpacity}), 0 4px 6px -2px rgba(0, 0, 0, ${shadowOpacity})`;
      default:
        return props.currentTheme === "eighties"
          ? `0 0 10px #ff00ff, 0 0 20px #00ffff, 0 0 30px #ffff00`
          : `0 4px 6px -1px rgba(0, 0, 0, ${shadowOpacity}), 0 2px 4px -1px rgba(0, 0, 0, ${shadowOpacity})`;
    }
  }};
`;

export const Card = ({
  children,
  padding = "medium",
  elevation = "medium",
}: CardProps) => {
  const { theme } = useTheme();

  return (
    <StyledCard padding={padding} elevation={elevation} currentTheme={theme}>
      {children}
    </StyledCard>
  );
};
