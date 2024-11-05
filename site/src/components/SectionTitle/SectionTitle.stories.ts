import { Meta, StoryObj } from '@storybook/react';
import { SectionTitle } from './SectionTitle';

// Storybookのメタ情報
const meta: Meta<typeof SectionTitle> = {
  title: 'Components/SectionTitle',
  component: SectionTitle,
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['plain', 'underLine', 'sideLine', 'speechBubble', 'solid', 'widthSubtitle'],
    },
    size: {
      control: { type: 'select' },
      options: ['xxl', 'xxxxl'],
    },
    subtitle: {
      control: 'text',
      description: 'サブタイトルとして表示するテキスト',
    },
    children: {
      control: 'text',
      defaultValue: 'セクションタイトル',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SectionTitle>;

// 各バリエーションのストーリー

export const Plain: Story = {
  args: {
    shape: 'plain',
    size: 'xxl',
    children: 'Plain Section Title',
  },
};

export const UnderLine: Story = {
  args: {
    shape: 'underLine',
    size: 'xxl',
    children: 'UnderLine Section Title',
  },
};

export const SideLine: Story = {
  args: {
    shape: 'sideLine',
    size: 'xxl',
    children: 'SideLine Section Title',
  },
};

export const SpeechBubble: Story = {
  args: {
    shape: 'speechBubble',
    size: 'xxl',
    children: 'SpeechBubble Section Title',
  },
};

export const Solid: Story = {
  args: {
    shape: 'solid',
    size: 'xxl',
    children: 'Solid Section Title',
  },
};

export const WidthSubtitle: Story = {
  args: {
    shape: 'widthSubtitle',
    size: 'xxl',
    children: 'Section Title with Subtitle',
    subtitle: 'This is a subtitle',
  },
};
