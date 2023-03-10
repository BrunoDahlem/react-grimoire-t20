import { Meta, Story } from '@storybook/react/types-6-0';
import { Text, TextProps } from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ratione ullam aperiam dolor officia molestias et vero dicta earum est. A in maxime debitis cum beatae necessitatibus veniam voluptates ab.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ratione ullam aperiam dolor officia molestias et vero dicta earum est. A in maxime debitis cum beatae necessitatibus veniam voluptates ab.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ratione ullam aperiam dolor officia molestias et vero dicta earum est. A in maxime debitis cum beatae necessitatibus veniam voluptates ab.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ratione ullam aperiam dolor officia molestias et vero dicta earum est. A in maxime debitis cum beatae necessitatibus veniam voluptates ab.
    `,
  },
  parameters: {},
} as Meta<TextProps>;

export const Template: Story<TextProps> = (args) => {
  return (
    <div>
      <Text {...args} />
    </div>
  );
};
