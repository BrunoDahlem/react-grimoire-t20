import { Meta, Story } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Heading',
    as: 'h1',
    size: 'medium',
    uppercase: false,
  },
  parameters: {},
} as Meta<HeadingProps>;

export const Template: Story<HeadingProps> = (args) => {
  return (
    <div>
      <Heading {...args} />
    </div>
  );
};
