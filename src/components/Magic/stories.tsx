import { Meta, Story } from '@storybook/react/types-6-0';
import { Magic, MagicProps } from '.';

export default {
  title: 'Magic',
  component: Magic,
  args: {
    id: 1,
    name: 'Abençoar Alimentos',
    type: 'Divina',
    school: 'Transmutação',
    circle: 1,
    header: [
      {
        name: 'Execução',
        value: 'padrão',
      },
      {
        name: 'Alcance',
        value: 'curto',
      },
      {
        name: 'Alvo/Área',
        value: 'alimento para 1 criatura',
      },
      {
        name: 'Duração',
        value: 'cena',
      },
      {
        name: 'Resistência',
        value: '',
      },
    ],
    description:
      'Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse). Bônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia',
    improvements: [
      {
        cost: 'Truque',
        description:
          'o alimento é purificado (não causa nenhum efeito nocivo se estava estragado ou envenenado), mas não oferece bônus ao ser consumido',
        require: '',
      },
      {
        cost: '1',
        description: 'aumenta o número de alvos em +1',
        require: '',
      },
      {
        cost: '1',
        description:
          'muda a duração para permanente, o alvo para 1 frasco com água e adiciona componente material (pó de prata no valor de T$ 5). Em vez do normal, cria um frasco de água benta',
        require: '',
      },
    ],
    extra: [],
  },
  parameters: {},
} as Meta<MagicProps>;

export const Template: Story<MagicProps> = (args) => {
  return (
    <div>
      <Magic {...args} />
    </div>
  );
};
