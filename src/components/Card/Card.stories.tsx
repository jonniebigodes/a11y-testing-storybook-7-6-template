import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    padding: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    elevation: {
      control: { type: "select" },
      options: ["none", "low", "medium", "high"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          width: "300px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Card Content
      </div>
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    padding: "small",
    children: (
      <div
        style={{
          width: "300px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Small Padding
      </div>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    padding: "large",
    children: (
      <div
        style={{
          width: "300px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Large Padding
      </div>
    ),
  },
};

export const NoElevation: Story = {
  args: {
    elevation: "none",
    children: (
      <div
        style={{
          width: "300px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        No Elevation
      </div>
    ),
  },
};

export const HighElevation: Story = {
  args: {
    elevation: "high",
    children: (
      <div
        style={{
          width: "300px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        High Elevation
      </div>
    ),
  },
};
