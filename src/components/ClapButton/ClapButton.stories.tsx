import type { Meta, StoryObj } from "@storybook/react";

import { ClapButton } from "../ClapButton";

const meta = {
  title: "Components/ClapButton",
  component: ClapButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ClapButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    postId: "story-post-1",
  },
};
