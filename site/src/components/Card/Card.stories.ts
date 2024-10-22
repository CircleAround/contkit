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
    state: {
      control: { type: 'select' },
      options: ['default', 'hover'],
    },
    stlye: {
      control: { type: 'select' },
      options: ['none', 'border'],
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
    imgSrc: {
      control: 'text',
      defaultValue: 'https://via.placeholder.com/150',
    },
    imgAlt: {
      control: 'text',
      defaultValue: 'Card Image',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: 'col',
    state: 'default',
    stlye: 'border',
    size: 'md',
    shape: 'md',
    title: 'Default Card',
    description: 'This is the default card layout with description and image.',
    imgSrc: 'https://via.placeholder.com/400x200',
    imgAlt: 'Default Image',
  },
};


export const NoBorder: Story = {
  args: {
    variant: 'col',
    state: 'default',
    stlye: 'none',
    size: 'none',
    shape: 'lg',
    title: 'NoBorder Card',
    description: 'This card has a solid style with a large border radius.',
    imgSrc: 'https://via.placeholder.com/400x200',
    imgAlt: 'Solid Image',
  },
};

export const RowLayout: Story = {
  args: {
    variant: 'row',
    state: 'default',
    stlye: 'border',
    size: 'md',
    shape: 'md',
    title: 'Row Layout Card',
    description: 'This card uses a row layout.',
    imgSrc: 'https://via.placeholder.com/400x200',
    imgAlt: 'Row Layout Image',
  },
};

export const HoverEffect: Story = {
  args: {
    variant: 'col',
    state: 'hover',
    stlye: 'border',
    size: 'md',
    shape: 'md',
    title: 'Hover Effect Card',
    description: 'This card has a hover effect.',
    imgSrc: 'https://via.placeholder.com/400x200',
    imgAlt: 'Hover Image',
  },
};

export const NoImage: Story = {
  args: {
    variant: 'col',
    state: 'default',
    stlye: 'border',
    size: 'md',
    shape: 'md',
    title: 'No Image Card',
    description: 'This card has no image.',
    imgSrc: '',
    imgAlt: '',
  },
};
