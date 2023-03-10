import { Meta, Story } from '@storybook/react/types-6-0';
import { Component, ComponentProps } from '.';

export default {
  title: 'Component',
  component: Component,
  args: {
    text: 'Component',
  },
  parameters: {},
} as Meta<ComponentProps>;

export const Template: Story<ComponentProps> = (args) => {
  return (
    <div>
      <Component {...args} />
    </div>
  );
};
