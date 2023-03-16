import { Meta, Story } from '@storybook/react/types-6-0';
import { Cards, CardsProps } from '.';
import { magics } from '../../api/magics';

const listMagics = magics;

export default {
  title: 'Cards',
  component: Cards,
  args: { data: listMagics },
} as Meta<CardsProps>;

export const Template: Story<CardsProps> = (args) => {
  return (
    <div>
      <Cards {...args} />
    </div>
  );
};
