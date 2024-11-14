import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SectionTitle, SectionSubTitle } from './SectionTitle';

const meta: Meta<typeof SectionTitle> = {
  title: 'Components/SectionTitle',
  component: SectionTitle,
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['plain', 'underLine', 'sideLine', 'speechBubble', 'solid', 'widthSubtitle'],
      description: 'Section Titleの形状スタイル',
    },
    children: {
      control: 'text',
      description: 'タイトルとして表示するテキスト',
      defaultValue: 'セクションタイトル',
    },
    className: {
      control: 'text',
      description: 'カスタムクラス名',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SectionTitle>;

export const Plain: Story = {
  args: {
    shape: 'plain',
    children: 'Plain Section Title',
  },
};

export const UnderLine: Story = {
  args: {
    shape: 'underLine',
    children: 'UnderLine Section Title',
  },
};

export const SideLine: Story = {
  args: {
    shape: 'sideLine',
    children: 'SideLine Section Title',
  },
};

export const SpeechBubble: Story = {
  args: {
    shape: 'speechBubble',
    children: 'SpeechBubble Section Title',
  },
};

export const Solid: Story = {
  args: {
    shape: 'solid',
    children: 'Solid Section Title',
  },
};

export const WidthSubtitleTop: Story = {
  render: (args) => (
    <>
      <SectionTitle {...args}>Section Title with Subtitle</SectionTitle>
      <SectionSubTitle>This is a subtitle</SectionSubTitle>
    </>
  ),
  args: {
    shape: 'widthSubtitle',
    children: 'Section Title with Subtitle',
  },
};

export const WidthSubtitleBottom: Story = {
  render: (args) => (
    <>
      <SectionSubTitle>This is a subtitle</SectionSubTitle>
      <SectionTitle {...args}>Section Title with Subtitle</SectionTitle>
    </>
  ),
  args: {
    shape: 'widthSubtitle',
    children: 'Section Title with Subtitle',
  },
};
