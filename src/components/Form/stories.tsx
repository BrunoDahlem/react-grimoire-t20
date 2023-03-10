import { Meta, Story } from '@storybook/react/types-6-0';
import { Form, FormProps } from '.';

export default {
  title: 'Form',
  component: Form,
  args: {
    fields: [
      {
        id: 'name',
        name: 'name',
        type: 'text',
        placeholder: 'Digite seu nome',
        require: true,
      },
      {
        id: 'email',
        name: 'email',
        type: 'email',
        placeholder: 'Digite seu E-mail',
        require: true,
      },
      {
        id: 'phone',
        name: 'phone',
        type: 'tel',
        placeholder: 'Digite seu Telefone',
        require: true,
      },
      {
        id: 'submit',
        name: 'submit',
        type: 'submit',
        placeholder: '',
        value: 'ENVIAR',
      },
    ],
    action: '#',
    method: 'get',
  },
  parameters: {},
} as Meta<FormProps>;

export const Template: Story<FormProps> = (args) => {
  return (
    <div style={{ width: '50%' }}>
      <Form {...args} />
    </div>
  );
};
