import { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['row', 'col'],
    },
    stlye: {
      control: { type: 'select' },
      options: ['none', 'border'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover'],
    },
    size: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    shape: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    link: {
      control: 'text',
      defaultValue: '',
    },
    title: {
      control: 'text',
      defaultValue: 'Card Title',
    },
    description: {
      control: 'text',
      defaultValue: 'This is a description of the card.',
    },
    date: {
      control: 'text',
      defaultValue: '2024-10-22',
    },
    imgSrc: {
      control: 'text',
      defaultValue: 'https://via.placeholder.com/150',
    },
    imgAlt: {
      control: 'text',
      defaultValue: 'Card Image',
    },
    badge: {
      control: 'object',
      defaultValue: [{ label: 'New', className: 'bg-green-500 text-white' }],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: 'col',
    stlye: 'border',
    state: 'default',
    size: 'md',
    shape: 'md',
    title: 'Default Card',
    description: 'This is the default card layout with description and image.',
    date: '2024-10-22',
    imgSrc: 'https://via.placeholder.com/400x200',
    imgAlt: 'Default Image',
    badge: [{ label: 'New', className: 'bg-green-500 text-white' }],
  },
};

export const NoBorder: Story = {
  args: {
    variant: 'col',
    stlye: 'none',
    state: 'default',
    size: 'md',
    shape: 'lg',
    title: 'NoBorder Card',
    description: 'This card has no border and a large border radius.',
    date: '2024-10-22',
    imgSrc: 'https://via.placeholder.com/400x200',
    imgAlt: 'Solid Image',
    badge: [{ label: 'Limited', className: 'bg-red-500 text-white' }],
  },
};

export const RowLayout: Story = {
  args: {
    variant: 'row',
    stlye: 'border',
    state: 'default',
    size: 'md',
    shape: 'md',
    title: 'Row Layout Card',
    description: 'This card uses a row layout.',
    date: '2024-10-22',
    imgSrc: 'https://via.placeholder.com/400x200',
    imgAlt: 'Row Layout Image',
    badge: [{ label: 'Featured', className: 'bg-blue-500 text-white' }],
  },
};

export const HoverEffect: Story = {
  args: {
    variant: 'col',
    stlye: 'border',
    state: 'hover',
    size: 'md',
    shape: 'md',
    title: 'Hover Effect Card',
    description: 'This card has a hover effect.',
    date: '2024-10-22',
    imgSrc: 'https://via.placeholder.com/400x200',
    imgAlt: 'Hover Image',
    badge: [{ label: 'Hover', className: 'bg-yellow-500 text-white' }],
  },
};

export const NoImage: Story = {
  args: {
    variant: 'col',
    stlye: 'border',
    state: 'default',
    size: 'md',
    shape: 'md',
    title: 'No Image Card',
    description: 'This card has no image.',
    date: '2024-10-22',
    imgSrc: '',
    imgAlt: '',
    badge: [{ label: 'No Image', className: 'bg-gray-500 text-white' }],
  },
};

export const NoDate: Story = {
  args: {
    variant: 'col',
    stlye: 'border',
    state: 'default',
    size: 'md',
    shape: 'md',
    title: 'No Image Card',
    description: 'This card has no image.',
    date: '',
    imgSrc: '',
    imgAlt: '',
    badge: [{ label: 'No Image', className: 'bg-gray-500 text-white' }],
  },
};

export const NoBadgee: Story = {
  args: {
    variant: 'col',
    stlye: 'border',
    state: 'default',
    size: 'md',
    shape: 'md',
    title: 'No Image Card',
    description: 'This card has no image.',
    date: '2024-10-22',
    imgSrc: '',
    imgAlt: '',
    badge: [],
  },
};