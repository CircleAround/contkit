import { Meta, StoryObj } from '@storybook/react';
import { SectionTitle } from './SectionTitle';

// Storybookのメタ情報
const meta: Meta<typeof SectionTitle> = {
  title: 'SectionTitle',
  component: SectionTitle,
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['plain', 'underLine', 'sideLine', 'speechBubble', 'solid'],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'xlarge'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof SectionTitle>;

// SectionTitleの各バリエーションのストーリー
export const Plain: Story = {
  args: {
    shape: 'plain',
    size: 'large',
    children: 'Plain Section Title',
  },
};

export const UnderLine: Story = {
  args: {
    shape: 'underLine',
    size: 'large',
    children: 'UnderLine Section Title',
  },
};

export const SideLine: Story = {
  args: {
    shape: 'sideLine',
    size: 'large',
    children: 'SideLine Section Title',
  },
};

export const SpeechBubble: Story = {
  args: {
    shape: 'speechBubble',
    size: 'large',
    children: 'SpeechBubble Section Title',
  },
};

export const Solid: Story = {
  args: {
    shape: 'solid',
    size: 'large',
    children: 'Solid Section Title',
  },
};
