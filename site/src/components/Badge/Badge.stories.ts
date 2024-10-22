import { Badge } from "./Badge";
import type { Meta, StoryObj } from "@storybook/react";

// ストーリーのメタ情報を定義
const badgeMeta = {
  title: "Components/Badge", // ストーリーのタイトル
  component: Badge, // ストーリーで使用するコンポーネント
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    state: { control: 'select', options: ['default', 'success', 'warning', 'danger'] },
    shape: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'full'] },
  },
} as Meta<typeof Badge>;

export default badgeMeta;

type Story = StoryObj<typeof Badge>;

// Badgeのストーリー
export const Primary: Story = {
  args: {
    children: "Badge",
    variant: 'primary',
    state: 'default',
    shape: 'full',
  },
};

export const Secondary: Story = {
  args: {
    children: "Badge",
    variant: 'secondary',
    state: 'default',
    shape: 'full',
  },
};

export const Success: Story = {
  args: {
    children: "Badge",
    variant: 'primary',
    state: 'success',
    shape: 'full',
  },
};

export const Warning: Story = {
  args: {
    children: "Badge",
    variant: 'primary',
    state: 'warning',
    shape: 'full',
  },
};

export const Danger: Story = {
  args: {
    children: "Badge",
    variant: 'primary',
    state: 'danger',
    shape: 'full',
  },
};
