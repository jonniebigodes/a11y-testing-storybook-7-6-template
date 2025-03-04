import { BlogPost } from "../types";

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    date: "2025-01-15",
    author: "Jane Doe",
    excerpt:
      "Learn how to set up a new project with React and TypeScript for better development experience.",
    content: `
# Getting Started with React and TypeScript

React and TypeScript make a powerful combination for building robust web applications. TypeScript adds static type checking to JavaScript, which can help catch errors early in the development process.

## Setting Up Your Project

To create a new React project with TypeScript, you can use Vite:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

## Benefits of TypeScript with React

1. **Type Safety**: Catch errors during development rather than at runtime
2. **Better IDE Support**: Get better autocomplete and intellisense
3. **Improved Refactoring**: Make changes with confidence
4. **Self-Documenting Code**: Types serve as documentation

## Example Component

\`\`\`tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: 'primary' | 'secondary';
}

const Button = ({ text, onClick, color = 'primary' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={\`btn btn-\${color}\`}
    >
      {text}
    </button>
  );
};
\`\`\`

TypeScript helps ensure that you're using components correctly and with the right props.
`,
    tags: ["React", "TypeScript", "Web Development"],
  },
  {
    id: "2",
    title: "Styling in React with Emotion",
    date: "2025-01-20",
    author: "John Smith",
    excerpt:
      "Discover how to use Emotion for CSS-in-JS styling in your React applications.",
    content: `
# Styling in React with Emotion

Emotion is a powerful CSS-in-JS library that lets you write styles with JavaScript. It provides strong typing when used with TypeScript and offers great performance.

## Why Use Emotion?

- **Component-based**: Styles are scoped to components
- **Dynamic styling**: Create styles based on props
- **TypeScript support**: Get type checking for your styles
- **Performance**: Emotion is optimized for performance

## Basic Usage

\`\`\`tsx
import styled from '@emotion/styled';

const Button = styled.button\`
  padding: 10px 15px;
  background-color: \${props => props.primary ? '#4299e1' : '#e2e8f0'};
  color: \${props => props.primary ? 'white' : 'black'};
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
\`;

// Usage
<Button primary>Click Me</Button>
\`\`\`

## Global Styles

You can also define global styles using the \`Global\` component:

\`\`\`tsx
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css\`
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
    \`}
  />
);
\`\`\`

Emotion makes styling in React a breeze while maintaining type safety with TypeScript.
`,
    tags: ["React", "Emotion", "CSS-in-JS", "Styling"],
  },
  {
    id: "3",
    title: "Creating Component Libraries with Storybook",
    date: "2025-01-25",
    author: "Alex Johnson",
    excerpt:
      "Learn how to build and document your component library using Storybook.",
    content: `
# Creating Component Libraries with Storybook

Storybook is an open-source tool for developing UI components in isolation. It makes building stunning UIs organized and efficient.

## Why Use Storybook?

- **Component isolation**: Develop and test components independently
- **Documentation**: Automatically document components and their props
- **Visual testing**: Catch visual regressions
- **Addon ecosystem**: Extend functionality with addons

## Setting Up Storybook

\`\`\`bash
npx storybook init
\`\`\`

## Creating Your First Story

\`\`\`tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};
\`\`\`

## Benefits for Teams

Storybook serves as a living documentation of your component library, making it easier for teams to collaborate and maintain consistency across projects.

It's an essential tool for any serious React project, especially when building design systems or component libraries.
`,
    tags: ["Storybook", "Component Library", "UI Development"],
  },
];
