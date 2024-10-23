import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

// Storybookのメタ情報
const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    className: {
      control: 'text',
      description: 'Breadcrumbのカスタムクラス名',
    },
    breadcrumbs: {
      control: 'object',
      description: '手動で設定するパンくずリストの項目',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

// デフォルトのBreadcrumbのストーリー
export const Default: Story = {
  args: {
    className: '',
    breadcrumbs: [
      { name: 'Blog', href: '/blog' },
      { name: 'Current', href: '/blog/current' },
    ],
  },
};