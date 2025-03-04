import styled from "@emotion/styled";
import { Moon, Sun, EyeOff, Heart, Star } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { ThemeType } from "../../theme";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleButton = styled.button<{ theme: string }>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#e5e7eb";
      case "purple":
        return "#fef08a";
      case "pink":
        return "#db2777";
      case "eighties":
        return "#ffff00";
      default:
        return "#4b5563";
    }
  }};
  transition: all 0.2s ease;

  ${(props) =>
    props.theme === "eighties" &&
    `
    border: 2px solid #ff00ff;
    background-color: #000;
    box-shadow: 0 0 10px #00ffff, 0 0 15px #ff00ff;
    animation: spin 3s infinite linear;
    @keyframes spin {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(5deg); }
      75% { transform: rotate(-5deg); }
      100% { transform: rotate(0deg); }
    }
  `}

  &:hover {
    background-color: ${(props) => {
      switch (props.theme) {
        case "dark":
          return "rgba(255, 255, 255, 0.1)";
        case "purple":
          return "rgba(126, 34, 206, 0.2)";
        case "pink":
          return "rgba(219, 39, 119, 0.2)";
        case "eighties":
          return "#ff00ff";
        default:
          return "rgba(0, 0, 0, 0.05)";
      }
    }};
    ${(props) =>
      props.theme === "eighties" &&
      `
      color: #00ffff;
      box-shadow: 0 0 15px #00ffff, 0 0 20px #ff00ff;
    `}
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px
      ${(props) => {
        switch (props.theme) {
          case "dark":
            return "rgba(255, 255, 255, 0.2)";
          case "purple":
            return "rgba(126, 34, 206, 0.5)";
          case "pink":
            return "rgba(219, 39, 119, 0.5)";
          case "eighties":
            return "#ff00ff";
          default:
            return "rgba(59, 130, 246, 0.5)";
        }
      }};
  }
`;

const ThemeSelect = styled.select<{ theme: string }>`
  margin-left: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid
    ${(props) => {
      switch (props.theme) {
        case "dark":
          return "#e5e7eb";
        case "purple":
          return "#7e22ce";
        case "pink":
          return "#db2777";
        case "eighties":
          return "#ff00ff";
        default:
          return "#4b5563";
      }
    }};
  background-color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#374151";
      case "purple":
        return "#4c1d95";
      case "pink":
        return "#fdf2f8";
      case "eighties":
        return "#000000";
      default:
        return "#ffffff";
    }
  }};
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#e5e7eb";
      case "purple":
        return "#fef08a";
      case "pink":
        return "#db2777";
      case "eighties":
        return "#00ffff";
      default:
        return "#4b5563";
    }
  }};
  appearance: none;
  padding-right: 2rem;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23${(
    props
  ) =>
    props.theme === "dark"
      ? "e5e7eb"
      : props.theme === "purple"
      ? "fef08a"
      : props.theme === "pink"
      ? "db2777"
      : props.theme === "eighties"
      ? "00ffff"
      : "4b5563"}%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 0.65rem auto;
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    border-width: 2px;
    text-transform: uppercase;
    text-shadow: 1px 1px #ff00ff;
    border-style: dashed;
    box-shadow: 0 0 5px #00ffff, 0 0 10px #ff00ff;
    animation: throb 1.5s infinite alternate;
    @keyframes throb {
      from { box-shadow: 0 0 5px #00ffff, 0 0 10px #ff00ff; }
      to { box-shadow: 0 0 10px #00ffff, 0 0 20px #ff00ff; }
    }
  `}
`;

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as ThemeType);
  };

  // Get the appropriate icon for the current theme
  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun size={20} />;
      case "dark":
        return <Moon size={20} />;
      case "purple":
        return <EyeOff size={20} />;
      case "pink":
        return <Heart size={20} />;
      case "eighties":
        return <Star size={20} color="#ffff00" />;
      default:
        return <Sun size={20} />;
    }
  };

  return (
    <ToggleContainer>
      <ToggleButton
        onClick={() => {
          const nextTheme = theme === "light" ? "dark" : "light";
          setTheme(nextTheme);
        }}
        theme={theme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {getThemeIcon()}
      </ToggleButton>
      <ThemeSelect value={theme} onChange={handleChange} theme={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="purple">Purple</option>
        <option value="pink">Pink</option>
        <option value="eighties">80's</option>
      </ThemeSelect>
    </ToggleContainer>
  );
};
