import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useTheme } from "../context/ThemeContext";
import { ThemeType } from "../theme";
import { Button } from "./Button";
import { Card } from "./Card";

// A component to demo all themes
interface ThemeDemoProps {
  initialTheme?: ThemeType;
}

const ThemeDemo = ({ initialTheme = "light" }: ThemeDemoProps) => {
  const { theme, setTheme } = useTheme();

  // Set initial theme if provided
  useEffect(() => {
    if (initialTheme) {
      setTheme(initialTheme);
    }
  }, [initialTheme, setTheme]);

  const handleThemeChange = (newTheme: ThemeType) => {
    setTheme(newTheme);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Card>
        <h2 style={{ marginBottom: "20px" }}>Theme System Demo</h2>
        <p style={{ marginBottom: "20px" }}>
          Current theme: <strong>{theme}</strong>
        </p>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Button
            onClick={() => handleThemeChange("light")}
            variant={theme === "light" ? "primary" : "outline"}
          >
            Light Theme
          </Button>
          <Button
            onClick={() => handleThemeChange("dark")}
            variant={theme === "dark" ? "primary" : "outline"}
          >
            Dark Theme
          </Button>
          <Button
            onClick={() => handleThemeChange("purple")}
            variant={theme === "purple" ? "primary" : "outline"}
          >
            Purple Theme
          </Button>
          <Button
            onClick={() => handleThemeChange("pink")}
            variant={theme === "pink" ? "primary" : "outline"}
          >
            Pink Theme
          </Button>
          <Button
            onClick={() => handleThemeChange("eighties")}
            variant={theme === "eighties" ? "primary" : "outline"}
          >
            80's Theme
          </Button>
        </div>

        <h3 style={{ marginBottom: "15px" }}>Buttons in Current Theme</h3>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </Card>
    </div>
  );
};

const meta = {
  title: "Theme/ThemeDemo",
  component: ThemeDemo,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ThemeDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialTheme: "light",
  },
};

export const DarkTheme: Story = {
  args: {
    initialTheme: "dark",
  },
};

export const NonAccessibleTheme: Story = {
  args: {
    initialTheme: "purple",
  },
};

export const PinkTheme: Story = {
  args: {
    initialTheme: "pink",
  },
};

export const EightiesTheme: Story = {
  args: {
    initialTheme: "eighties",
  },
};
