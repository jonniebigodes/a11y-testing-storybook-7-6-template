import { css } from "@emotion/react";
import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { useTheme } from "../../context/ThemeContext";

interface MarkdownRendererProps {
  content: string;
}

const getThemeColor = (
  theme: string,
  darkColor: string,
  lightColor: string,
  nonAccessibleColor: string,
  pinkColor: string = "#fbcfe8"
) => {
  switch (theme) {
    case "dark":
      return darkColor;
    case "purple":
      return nonAccessibleColor;
    case "pink":
      return pinkColor;
    default:
      return lightColor;
  }
};

const MarkdownContainer = styled.div<{ theme: string }>`
  ${(props) => css`
    color: ${getThemeColor(
      props.theme,
      "#e5e7eb",
      "#374151",
      "#fef9c3",
      "#fbcfe8"
    )};
    line-height: 1.7;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-weight: 700;
      line-height: 1.3;
      color: ${getThemeColor(
        props.theme,
        "#f9fafb",
        "#111827",
        "#fef08a",
        "#fdf2f8"
      )};
    }

    h1 {
      font-size: 2.25rem;
      border-bottom: 1px solid
        ${getThemeColor(props.theme, "#374151", "#e5e7eb", "#7e22ce")};
      padding-bottom: 0.5rem;
    }

    h2 {
      font-size: 1.875rem;
      border-bottom: 1px solid
        ${getThemeColor(props.theme, "#374151", "#e5e7eb", "#7e22ce")};
      padding-bottom: 0.5rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1.25rem;
    }

    p {
      margin-bottom: 1.5rem;
    }

    a {
      color: ${getThemeColor(
        props.theme,
        "#60a5fa",
        "#3b82f6",
        "#fef08a",
        "#db2777"
      )};
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-color 0.2s ease;

      &:hover {
        border-color: ${getThemeColor(
          props.theme,
          "#60a5fa",
          "#3b82f6",
          "#fef08a",
          "#db2777"
        )};
      }
    }

    ul,
    ol {
      margin-bottom: 1.5rem;
      padding-left: 2rem;
    }

    li {
      margin-bottom: 0.5rem;
    }

    blockquote {
      border-left: 4px solid
        ${getThemeColor(
          props.theme,
          "#374151",
          "#e5e7eb",
          "#7e22ce",
          "#f472b6"
        )};
      padding-left: 1rem;
      margin-left: 0;
      margin-right: 0;
      font-style: italic;
      color: ${getThemeColor(
        props.theme,
        "#9ca3af",
        "#6b7280",
        "#fef9c3",
        "#fbcfe8"
      )};
    }

    hr {
      border: none;
      height: 1px;
      background-color: ${getThemeColor(
        props.theme,
        "#374151",
        "#e5e7eb",
        "#7e22ce",
        "#f472b6"
      )};
      margin: 2rem 0;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 0.375rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 1.5rem;
    }

    th,
    td {
      border: 1px solid
        ${getThemeColor(props.theme, "#4b5563", "#e5e7eb", "#7e22ce")};
      padding: 0.75rem;
    }

    th {
      background-color: ${getThemeColor(
        props.theme,
        "#374151",
        "#f9fafb",
        "#4c1d95"
      )};
      font-weight: 600;
    }

    tr:nth-of-type(even) {
      background-color: ${getThemeColor(
        props.theme,
        "#283241",
        "#f9fafb",
        "#5b21b6"
      )};
    }

    pre {
      margin-bottom: 1.5rem;
      border-radius: 0.375rem;
      overflow: hidden;
    }

    code {
      font-family: "Menlo", "Monaco", "Courier New", monospace;
    }

    :not(pre) > code {
      background-color: ${getThemeColor(
        props.theme,
        "#374151",
        "#f3f4f6",
        "#4c1d95"
      )};
      padding: 0.2rem 0.4rem;
      border-radius: 0.25rem;
      font-size: 0.875em;
      color: ${getThemeColor(props.theme, "#e5e7eb", "#111827", "#fef08a")};
    }
  `}
`;

// Function to get the syntax highlighter style based on theme
const getSyntaxHighlighterStyle = (theme: string) => {
  switch (theme) {
    case "dark":
      return oneDark;
    case "purple":
      return oneDark;
    case "pink":
      return oneLight;
    default:
      return oneLight;
  }
};

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  const { theme } = useTheme();

  return (
    <MarkdownContainer theme={theme}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // @ts-expect-error - Known type issue with SyntaxHighlighter
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                style={getSyntaxHighlighterStyle(theme)}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </MarkdownContainer>
  );
};
