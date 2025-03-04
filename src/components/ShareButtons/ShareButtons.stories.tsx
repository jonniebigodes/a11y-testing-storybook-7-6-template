import type { Meta, StoryObj } from "@storybook/react";

import { ShareButtons } from "./ShareButtons";
import { ThemeProvider } from "../../context/ThemeContext";

const meta: Meta<typeof ShareButtons> = {
  title: "Components/ShareButtons",
  component: ShareButtons,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: "2rem", width: "400px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ShareButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Sample Blog Post",
    url: "https://example.com/post/1",
  },
};
