import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

interface ClapButtonProps {
  postId: string;
}

const ClapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

const ClapButtonStyled = styled.button<{ isClapped: boolean; theme: string }>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 50%;
  transition: all 0.2s ease;
  background-color: ${(props) => {
    if (props.isClapped) {
      switch (props.theme) {
        case "dark":
          return "rgba(239, 68, 68, 0.2)";
        case "purple":
          return "rgba(254, 240, 138, 0.2)";
        case "pink":
          return "rgba(249, 168, 212, 0.2)";
        case "eighties":
          return "rgba(255, 0, 255, 0.5)";
        default:
          return "rgba(239, 68, 68, 0.1)";
      }
    } else {
      switch (props.theme) {
        case "dark":
          return "rgba(255, 255, 255, 0.1)";
        case "purple":
          return "rgba(254, 240, 138, 0.1)";
        case "pink":
          return "rgba(249, 168, 212, 0.1)";
        case "eighties":
          return "rgba(0, 255, 255, 0.5)";
        default:
          return "rgba(0, 0, 0, 0.05)";
      }
    }
  }};

  color: ${(props) => {
    if (props.isClapped) {
      if (props.theme === "purple") return "#fef08a";
      if (props.theme === "pink") return "#db2777";
      if (props.theme === "eighties") return "#ffff00";
      return "#ef4444";
    } else {
      switch (props.theme) {
        case "dark":
          return "#e5e7eb";
        case "purple":
          return "#fef9c3";
        case "pink":
          return "#db2777";
        case "eighties":
          return "#ffff00";
        default:
          return "#4b5563";
      }
    }
  }};

  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => {
      if (props.isClapped) {
        switch (props.theme) {
          case "dark":
            return "rgba(239, 68, 68, 0.3)";
          case "purple":
            return "rgba(254, 240, 138, 0.3)";
          case "pink":
            return "rgba(249, 168, 212, 0.3)";
          case "eighties":
            return "rgba(255, 0, 255, 0.8)";
          default:
            return "rgba(239, 68, 68, 0.2)";
        }
      } else {
        switch (props.theme) {
          case "dark":
            return "rgba(255, 255, 255, 0.15)";
          case "purple":
            return "rgba(254, 240, 138, 0.2)";
          case "pink":
            return "rgba(249, 168, 212, 0.2)";
          case "eighties":
            return "rgba(0, 255, 255, 0.8)";
          default:
            return "rgba(0, 0, 0, 0.1)";
        }
      }
    }};
    ${(props) =>
      props.theme === "eighties" &&
      `
      animation: heartbeat 0.6s infinite alternate;
      @keyframes heartbeat {
        0% { transform: scale(1); }
        100% { transform: scale(1.3); }
      }
    `}
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px
      ${(props) => {
        if (props.theme === "purple") return "rgba(254, 240, 138, 0.5)";
        if (props.theme === "pink") return "rgba(249, 168, 212, 0.5)";
        if (props.theme === "eighties")
          return "0 0 10px #ffff00, 0 0 20px #ff00ff";
        return "rgba(239, 68, 68, 0.5)";
      }};
  }

  ${(props) =>
    props.isClapped &&
    css`
      svg {
        fill: ${props.theme === "purple"
          ? "#fef08a"
          : props.theme === "pink"
          ? "#db2777"
          : props.theme === "eighties"
          ? "#ffff00"
          : "#ef4444"};
      }
    `}
`;

const ClapCount = styled.span<{ theme: string }>`
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 0.5rem;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#e5e7eb";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#db2777";
      case "eighties":
        return "#ffff00";
      default:
        return "#4b5563";
    }
  }};
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 1.2rem;
    text-shadow: 1px 1px #ff00ff;
  `}
`;

const ClapText = styled.span<{ theme: string }>`
  font-size: 0.75rem;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#9ca3af";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#fbcfe8";
      case "eighties":
        return "#00ff00";
      default:
        return "#6b7280";
    }
  }};
  margin-top: 0.25rem;
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 1rem;
    animation: flashText 1s infinite alternate;
    @keyframes flashText {
      from { opacity: 0.6; }
      to { opacity: 1; }
    }
  `}
`;

export const ClapButton = ({ postId }: ClapButtonProps) => {
  const [claps, setClaps] = useState(0);
  const [isClapped, setIsClapped] = useState(false);
  const { theme } = useTheme();

  // Load clap state from localStorage
  useEffect(() => {
    const savedClaps = localStorage.getItem(`post-${postId}-claps`);
    if (savedClaps) {
      setClaps(parseInt(savedClaps, 10));
      setIsClapped(true);
    }
  }, [postId]);

  const handleClap = () => {
    if (!isClapped) {
      const newClaps = claps + 1;
      setClaps(newClaps);
      setIsClapped(true);
      localStorage.setItem(`post-${postId}-claps`, newClaps.toString());
    } else {
      setClaps(claps - 1);
      setIsClapped(false);
      localStorage.removeItem(`post-${postId}-claps`);
    }
  };

  return (
    <ClapContainer>
      <ClapButtonStyled
        onClick={handleClap}
        isClapped={isClapped}
        theme={theme}
        aria-label={isClapped ? "Remove appreciation" : "Show appreciation"}
      >
        <Heart size={24} />
      </ClapButtonStyled>
      <ClapCount theme={theme}>{claps}</ClapCount>
      <ClapText theme={theme}>
        {isClapped ? "You appreciated this" : "Appreciate this post"}
      </ClapText>
    </ClapContainer>
  );
};
