import { Meta, Story } from '@storybook/react/types-6-0';
import { Input, InputProps } from '.';

export default {
  title: 'Input',
  component: Input,
  args: {
    type: 'text',
  },
  parameters: {},
} as Meta<InputProps>;

export const Template: Story<InputProps> = (args) => {
  return (
    <div>
      <Input {...args} />
    </div>
  );
};
