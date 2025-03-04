import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
import { useTheme } from "../../context/ThemeContext";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
}

const StyledButton = styled.button<ButtonProps & { themeType?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 150ms ease-in-out;
  cursor: pointer;
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "0.5rem 1rem";
      case "large":
        return "0.75rem 1.5rem";
      default:
        return "0.625rem 1.25rem";
    }
  }};

  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "0.875rem";
      case "large":
        return "1.125rem";
      default:
        return "1rem";
    }
  }};
  background-color: ${(props) => {
    // Handle purple theme colors
    if (props.themeType === "purple") {
      switch (props.variant) {
        case "primary":
          return "#fef08a"; // Yellow from purple theme
        case "secondary":
          return "#c084fc"; // Purple variation
        case "outline":
          return "transparent";
        default:
          return "#fef08a";
      }
    }

    // Handle pink theme colors
    if (props.themeType === "pink") {
      switch (props.variant) {
        case "primary":
          return "#f9a8d4"; // Pink accent
        case "secondary":
          return "#f472b6"; // Darker pink
        case "outline":
          return "transparent";
        default:
          return "#f9a8d4";
      }
    }

    // Handle 80s theme colors
    if (props.themeType === "eighties") {
      switch (props.variant) {
        case "primary":
          return "#ffff00"; // Bright yellow
        case "secondary":
          return "#00ffff"; // Bright cyan
        case "outline":
          return "transparent";
        default:
          return "#ffff00";
      }
    }

    // Default theme colors
    switch (props.variant) {
      case "primary":
        return "#3b82f6";
      case "secondary":
        return "#6b7280";
      case "outline":
        return "transparent";
      default:
        return "#3b82f6";
    }
  }};

  color: ${(props) => {
    if (props.themeType === "purple") {
      return props.variant === "outline" ? "#fef08a" : "#4c1d95";
    }
    if (props.themeType === "pink") {
      return props.variant === "outline" ? "#f9a8d4" : "#831843";
    }
    if (props.themeType === "eighties") {
      return props.variant === "outline" ? "#00ffff" : "#ff00ff"; // Poor contrast: cyan on transparent or magenta on yellow
    }
    return props.variant === "outline" ? "#3b82f6" : "white";
  }};

  border: ${(props) => {
    if (props.themeType === "purple") {
      return props.variant === "outline" ? "1px solid #fef08a" : "none";
    }
    if (props.themeType === "pink") {
      return props.variant === "outline" ? "1px solid #f9a8d4" : "none";
    }
    if (props.themeType === "eighties") {
      return props.variant === "outline" ? "2px solid #00ffff" : "none"; // Thicker border for 80s style
    }
    return props.variant === "outline" ? "1px solid #3b82f6" : "none";
  }};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    ${(props) =>
      props.themeType === "eighties" &&
      `
      animation: eighties-flash 0.5s infinite alternate;
      @keyframes eighties-flash {
        from { background-color: #ffff00; color: #ff00ff; }
        to { background-color: #ff00ff; color: #ffff00; }
      }
    `}
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px
      ${(props) => {
        if (props.themeType === "purple") {
          return "rgba(254, 240, 138, 0.5)";
        }
        if (props.themeType === "pink") {
          return "rgba(249, 168, 212, 0.5)";
        }
        if (props.themeType === "eighties") {
          return "0 0 10px #00ffff, 0 0 20px #ff00ff"; // Neon glow effect
        }
        return "rgba(59, 130, 246, 0.5)";
      }};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  ...props
}: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <StyledButton variant={variant} size={size} themeType={theme} {...props}>
      {children}
    </StyledButton>
  );
};
