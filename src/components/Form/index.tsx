import { FormEvent } from 'react';
import { Input, InputProps } from '../Input';
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
        return <Input key={index} {...field} />;
      })}
    </Styled.Container>
  );
};
