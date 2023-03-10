import { InputProps } from '../components/Input';

export const fields = [
  {
    id: 'name',
    type: 'text',
    name: 'name',
    placeholder: 'Digite o nome da Magia',
    label: 'Digite o nome da Magia',
  },
  {
    id: 'id',
    type: 'text',
    name: 'id',
    placeholder: 'Digite o(s) id(s) separados por ,',
    label: 'Digite o(s) id(s) separados por ,',
  },
  {
    id: 'type',
    type: 'select',
    name: 'type',
    placeholder: 'Selecione o(s) Tipo(s)',
    label: 'Selecione o(s) Tipo(s)',
  },
  {
    id: 'schools',
    type: 'select',
    name: 'schools',
    multiple: true,
    label: 'Seleciona a(s) Escola(s)',
  },
  {
    id: 'circles',
    type: 'select',
    name: 'circles',
    placeholder: 'Selecione o(s) círculo(s) da(s) Magia(s)',
    multiple: true,
    label: 'Selecione o(s) Círculo(s)',
  },
  {
    id: 'submit',
    type: 'submit',
    name: 'submit',
  },
] as InputProps[];
