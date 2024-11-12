import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BadgeList } from './BadgeList';
import { Badge } from './Badge';

const meta: Meta<typeof BadgeList> = {
  title: 'Components/Badge/BadgeList',
  component: BadgeList,
  argTypes: {
    className: {
      control: 'text',
      description: 'カスタムクラス名を適用',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BadgeList>;

export const Default: Story = {
  render: (args) => (
    <BadgeList {...args}>
      <Badge variant="primary" shape="md" state="default">Primary</Badge>
      <Badge variant="secondary" shape="md" state="default">Secondary</Badge>
      <Badge variant="primary" shape="md" state="success">Success</Badge>
      <Badge variant="primary" shape="md" state="warning">Warning</Badge>
      <Badge variant="primary" shape="md" state="danger">Danger</Badge>
    </BadgeList>
  ),
  args: {
    className: '',
  },
};
