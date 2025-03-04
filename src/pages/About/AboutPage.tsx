import styled from "@emotion/styled";
import { Card } from "../../components/Card";
import { useTheme } from "../../context/ThemeContext";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const AboutTitle = styled.h1<{ theme: string }>`
  font-size: 2.5rem;
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
        return "#ffff00"; // Yellow text on magenta background
      default:
        return "#1f2937";
    }
  }};
  margin-bottom: 2rem;
  text-align: center;
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    text-shadow: 3px 3px #ff00ff;
    letter-spacing: 3px;
    animation: aboutTitleAnim 2s infinite alternate;
    @keyframes aboutTitleAnim {
      from { letter-spacing: 2px; }
      to { letter-spacing: 5px; }
    }
  `}
`;

const AboutContent = styled.div<{ theme: string }>`
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#d1d5db";
      case "purple":
        return "#fef9c3";
      case "pink":
        return "#fbcfe8";
      case "eighties":
        return "#00ff00"; // Green text on magenta background - poor contrast
      default:
        return "#4b5563";
    }
  }};
  line-height: 1.7;
  font-size: 1.125rem;
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    font-size: 1.3rem;
    line-height: 1.5;
    letter-spacing: 1px;
  `}

  p {
    margin-bottom: 1.5rem;
    ${(props) =>
      props.theme === "eighties" &&
      `
      text-shadow: 1px 1px #ff00ff;
      padding: 5px;
      border-left: 3px solid #00ffff;
    `}
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
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
    margin-top: 2rem;
    margin-bottom: 1rem;
    ${(props) =>
      props.theme === "eighties" &&
      `
      text-shadow: 2px 2px #ff00ff;
      text-transform: uppercase;
      letter-spacing: 2px;
    `}
  }

  strong {
    color: ${(props) => {
      switch (props.theme) {
        case "dark":
          return "#f9fafb";
        case "purple":
          return "#fef08a";
        case "pink":
          return "#fdf2f8";
        case "eighties":
          return "#00ffff"; // Cyan text
        default:
          return "#1f2937";
      }
    }};
    font-weight: 600;
    ${(props) =>
      props.theme === "eighties" &&
      `
      background: linear-gradient(to right, #00ffff, #ff00ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      padding: 0 3px;
      font-weight: bold;
    `}
  }

  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    ${(props) =>
      props.theme === "eighties" &&
      `
      color: #ff00ff;
      text-decoration: none;
      border-bottom: 2px dashed #00ffff;
      padding-bottom: 2px;
      font-weight: bold;
      transition: all 0.3s;
      
      &:hover {
        background-color: #ff00ff;
        color: #00ffff;
        animation: shake 0.5s infinite;
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(0); }
          75% { transform: translateX(5px); }
          100% { transform: translateX(0); }
        }
      }
    `}
  }
`;

const SectionTitle = styled.h2<{ theme: string }>`
  font-size: 1.5rem;
  font-weight: 700;
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
  margin-top: 2rem;
  ${(props) =>
    props.theme === "eighties" &&
    `
    font-family: "VT323", "Courier New", monospace;
    text-shadow: 2px 2px #ff00ff;
    letter-spacing: 2px;
    padding: 5px 10px;
    border: 2px solid #00ffff;
    display: inline-block;
    transform: rotate(-1deg);
    background-color: rgba(255, 0, 255, 0.2);
  `}
`;

const TechList = styled.ul<{ theme: string }>`
  list-style-type: disc;
  padding-left: 1.5rem;
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#9ca3af";
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
    list-style-type: none;
    padding-left: 0;
    
    li {
      position: relative;
      padding-left: 25px;
      margin-bottom: 10px;
      
      &:before {
        content: ">";
        position: absolute;
        left: 0;
        color: #ff00ff;
        font-weight: bold;
        animation: blink 1s infinite;
        @keyframes blink {
          0% { opacity: 0; }
          49% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 1; }
        }
      }
    }
  `}
`;

export const AboutPage = () => {
  const { theme } = useTheme();

  return (
    <AboutContainer>
      <Card>
        <AboutTitle theme={theme}>About Our Blog</AboutTitle>
        <AboutContent theme={theme}>
          <p>
            Welcome to our Testing Blog, a platform dedicated to sharing
            insights, best practices, and stories about software testing,
            development, and design.
          </p>

          <SectionTitle theme={theme}>Our Technology Stack</SectionTitle>
          <p>This blog is built using cutting-edge web technologies:</p>
          <TechList theme={theme}>
            <li>
              <strong>React</strong> - For building a component-based UI
            </li>
            <li>
              <strong>TypeScript</strong> - For type safety and better developer
              experience
            </li>
            <li>
              <strong>Emotion</strong> - For component-scoped styling
            </li>
            <li>
              <strong>Storybook</strong> - For component development and
              documentation
            </li>
          </TechList>

          <SectionTitle theme={theme}>Why Markdown?</SectionTitle>
          <p>
            We use Markdown for our blog posts because it's simple, portable,
            and allows writers to focus on content rather than formatting. Our
            custom Markdown renderer supports:
          </p>
          <p>
            - Rich text formatting
            <br />
            - Code blocks with syntax highlighting
            <br />- Inline code snippets
          </p>

          <SectionTitle theme={theme}>Contact Us</SectionTitle>
          <p>
            Have questions, suggestions, or want to contribute to our blog?
            Reach out to us at{" "}
            <a href="mailto:contact@testingblog.com">contact@testingblog.com</a>
          </p>
        </AboutContent>
      </Card>
    </AboutContainer>
  );
};
