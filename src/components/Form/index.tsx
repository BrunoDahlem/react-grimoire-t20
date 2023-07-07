import { FormEvent } from 'react';
import { Input, InputProps } from '../Input';
import { Select } from '../Select';
import * as Styled from './styles';

export type FormProps = {
  fields: InputProps[];
  action: string;
  method: 'get' | 'post';
  onSubmit: (e: FormEvent) => void;
};

export const Form = ({ fields = [], action, method, onSubmit }: FormProps) => {
  return (
    <Styled.Container action={action} method={method} onSubmit={onSubmit}>
      {fields.map((field, index) => {
        if (field.type === 'select') {
          return <Select key={index} {...field} />;
        }
        return <Input key={index} {...field} />;
      })}
    </Styled.Container>
  );
};
