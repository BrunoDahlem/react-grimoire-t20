import { Meta, Story } from '@storybook/react/types-6-0';
import { Select, SelectProps } from '.';

export default {
  title: 'Select',
  component: Select,
  args: {
    type: 'text',
  },
  parameters: {},
} as Meta<SelectProps>;

export const Template: Story<SelectProps> = (args) => {
  return (
    <div>
      <Select {...args} />
    </div>
  );
};
