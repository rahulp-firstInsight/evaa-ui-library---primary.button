import type { Meta, StoryObj } from '@storybook/react';
import { CustomButton } from './CustomButton';

const meta: Meta<typeof CustomButton> = {
  title: 'Components/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'clicked', 'disabled'],
    },
    withIcon: {
      control: { type: 'boolean' },
    },
    hasIcon: {
      control: { type: 'boolean' },
    },
    hasLabel: {
      control: { type: 'boolean' },
    },
    buttonLabel: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
    withIcon: false,
    hasIcon: true,
    hasLabel: true,
    buttonLabel: 'Book Appointment',
    className: '',
  },
};

export const WithIcon: Story = {
  args: {
    state: 'default',
    withIcon: true,
    hasIcon: true,
    hasLabel: true,
    buttonLabel: 'Book Appointment',
    className: '',
  },
};

export const Hover: Story = {
  args: {
    state: 'hover',
    withIcon: false,
    hasIcon: true,
    hasLabel: true,
    buttonLabel: 'Book Appointment',
    className: '',
  },
};

export const Clicked: Story = {
  args: {
    state: 'clicked',
    withIcon: false,
    hasIcon: true,
    hasLabel: true,
    buttonLabel: 'Book Appointment',
    className: '',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    withIcon: false,
    hasIcon: true,
    hasLabel: true,
    buttonLabel: 'Book Appointment',
    className: '',
  },
};
