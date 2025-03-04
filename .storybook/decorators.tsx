import React, { useEffect, ReactNode } from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Decorator } from "@storybook/react";
import { ThemeProvider } from "../src/context/ThemeContext";
import { ThemeType } from "../src/theme";

interface ThemeSetterProps {
  theme: ThemeType;
  children: ReactNode;
}

// Theme setter component that uses the useTheme hook
const ThemeSetter: React.FC<ThemeSetterProps> = ({ theme, children }) => {
  useEffect(() => {
    // Set theme on document for Storybook
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <>{children}</>;
};

export const withThemeProvider: Decorator = (Story, { globals }) => {
  // Get theme from Storybook globals (defaults to light if not set)
  const { theme = "light" } = globals;

  return (
    <ThemeProvider>
      <ThemeSetter theme={theme as ThemeType}>
        <Story />
      </ThemeSetter>
    </ThemeProvider>
  );
};

export const withRouter: Decorator = (StoryFn, { parameters }) => {
  // If there's a deeplink, use it to configure routing
  if (parameters.deeplink) {
    const { path, route } = parameters.deeplink;

    return (
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path={path} element={<StoryFn />} />
        </Routes>
      </MemoryRouter>
    );
  }

  // For stories without deeplink parameters, use a simple MemoryRouter
  return (
    <MemoryRouter>
      <StoryFn />
    </MemoryRouter>
  );
};
