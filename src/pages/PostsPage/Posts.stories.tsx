import type { Meta, StoryObj } from "@storybook/react";
import { PostPage } from "./PostPage";

const meta = {
  title: "Pages/Posts",
  component: PostPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PostPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyPost: Story = {};

export const ExamplePost: Story = {
  parameters: {
    deeplink: {
      path: "/post/:id",
      route: "/post/1",
    },
  },
};
