import type { Meta, StoryObj } from "@storybook/react";

import { AboutPage } from "./AboutPage";

const meta = {
  title: "Pages/AboutPage",
  component: AboutPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
