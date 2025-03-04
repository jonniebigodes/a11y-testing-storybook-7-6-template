import { css } from "@emotion/react";
import { ThemeType } from "../theme";
import { reset } from "./CSSReset";
import { mediaQueries } from "./breakpoints";

export const GlobalStyle = (theme: ThemeType) => css`
  ${reset}

  :root {
    /* Base colors */
    --color-primary: ${theme === "dark"
      ? "#60a5fa"
      : theme === "purple"
      ? "#fef08a"
      : theme === "pink"
      ? "#db2777"
      : theme === "eighties"
      ? "#00ffff"
      : "#3b82f6"};

    --color-background: ${theme === "dark"
      ? "#111827"
      : theme === "purple"
      ? "#2e1065"
      : theme === "pink"
      ? "#831843"
      : theme === "eighties"
      ? "#000000"
      : "#f9fafb"};

    --color-text: ${theme === "dark"
      ? "#f9fafb"
      : theme === "purple"
      ? "#fef9c3"
      : theme === "pink"
      ? "#fbcfe8"
      : theme === "eighties"
      ? "#00ffff"
      : "#1f2937"};

    --color-text-secondary: ${theme === "dark"
      ? "#9ca3af"
      : theme === "purple"
      ? "#fef9c3"
      : theme === "pink"
      ? "#fbcfe8"
      : theme === "eighties"
      ? "#ff00ff"
      : "#6b7280"};
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text);
    font-family: ${theme === "eighties"
      ? '"VT323", "Courier New", monospace'
      : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Typography */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    ${mediaQueries.md} {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 2rem;
    ${mediaQueries.md} {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.75rem;
    ${mediaQueries.md} {
      font-size: 2rem;
    }
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  /* Links */
  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${theme === "eighties" ? "#ffff00" : "inherit"};
    }
  }

  /* Container */
  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;

    ${mediaQueries.sm} {
      max-width: 640px;
    }

    ${mediaQueries.md} {
      max-width: 768px;
    }

    ${mediaQueries.lg} {
      max-width: 1024px;
    }

    ${mediaQueries.xl} {
      max-width: 1280px;
    }

    ${mediaQueries.xxl} {
      max-width: 1536px;
    }
  }

  /* Utility classes */
  .text-center {
    text-align: center;
  }

  .mt-1 {
    margin-top: 0.25rem;
  }
  .mt-2 {
    margin-top: 0.5rem;
  }
  .mt-3 {
    margin-top: 1rem;
  }
  .mt-4 {
    margin-top: 1.5rem;
  }
  .mt-5 {
    margin-top: 2rem;
  }

  .mb-1 {
    margin-bottom: 0.25rem;
  }
  .mb-2 {
    margin-bottom: 0.5rem;
  }
  .mb-3 {
    margin-bottom: 1rem;
  }
  .mb-4 {
    margin-bottom: 1.5rem;
  }
  .mb-5 {
    margin-bottom: 2rem;
  }

  /* Eighties theme specific styles */
  ${theme === "eighties" &&
  css`
    * {
      transition: all 0.3s ease;
    }

    ::selection {
      background-color: #ff00ff;
      color: #00ffff;
    }

    /* Neon text effects */
    .neon-text {
      text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff;
    }

    /* Retro button styles */
    button {
      border: 2px solid #ff00ff;
      background: transparent;
      color: #00ffff;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #ff00ff;
        color: #00ffff;
        box-shadow: 0 0 10px #ff00ff, 0 0 20px #00ffff;
      }
    }
  `}
`;
