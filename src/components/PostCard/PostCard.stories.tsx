import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { PostCard } from "./PostCard";

// Decorator for centered width
const withCenteredWidth = (Story: React.ComponentType) => (
  <div style={{ width: "600px" }}>
    <Story />
  </div>
);

const meta: Meta<typeof PostCard> = {
  title: "Components/PostCard",
  component: PostCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [withCenteredWidth],
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: {
      id: "1",
      title: "Sample Blog Post",
      date: "2025-01-15",
      author: "Jane Doe",
      excerpt:
        "This is a sample blog post excerpt that gives a brief overview of what the post is about.",
      content:
        "# Sample Blog Post\n\nThis is the full content of the blog post.",
      tags: ["React", "TypeScript", "Web Development"],
    },
  },
};

export const LongTitle: Story = {
  args: {
    post: {
      id: "2",
      title:
        "This is a Very Long Blog Post Title That Should Wrap to Multiple Lines When Displayed in the Card",
      date: "2025-01-20",
      author: "John Smith",
      excerpt:
        "This post has a very long title to demonstrate how the component handles long titles.",
      content:
        "# Long Title Post\n\nThis is the full content of the blog post.",
      tags: ["Design", "UI/UX", "Best Practices"],
    },
  },
};

export const ManyTags: Story = {
  args: {
    post: {
      id: "3",
      title: "Post with Many Tags",
      date: "2025-01-25",
      author: "Alex Johnson",
      excerpt:
        "This post has many tags to demonstrate how the component handles multiple tags.",
      content: "# Many Tags Post\n\nThis is the full content of the blog post.",
      tags: [
        "React",
        "TypeScript",
        "JavaScript",
        "CSS",
        "HTML",
        "Web Development",
        "Frontend",
        "UI",
        "Design",
      ],
    },
  },
};
