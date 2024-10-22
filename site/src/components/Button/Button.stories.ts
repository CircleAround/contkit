import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

// ストーリーのメタ情報を定義
const buttonMeta = {
  title: "Button",// ストーリーのタイトル
  component: Button, // ストーリーで使用するコンポーネント
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    shape: { control: 'select', options: ['sm', 'md', 'lg', 'full'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'iconOnly'] },
    state: { control: 'select', options: ['default', 'disabled'] },
  },
} as Meta<typeof Button>;

export default buttonMeta;

type Story = StoryObj<typeof Button>;

// Buttonのストーリー
export const Primary: Story = {
  args: {
    children: "ボタン",
    variant: 'primary',
    shape: 'lg',
    size: 'md',
    state: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: "ボタン",
    variant: 'secondary',
    shape: 'lg',
    size: 'md',
    state: 'default',
  },
};
