import * as Styled from './styles';
import { Text } from '../Text';

export type InputProps = {
  id?: string;
  type: string;
  name: string;
  require: boolean;
  placeholder?: string;
  label?: string;
  value?: string;
  multiple?: boolean;
  description?: string;
};

export const Input = ({
  type,
  placeholder,
  label,
  id,
  name,
  value,
  require,
  description,
}: InputProps) => {
  return (
    <Styled.Container>
      {label && <Styled.Label htmlFor={id}>{label}:</Styled.Label>}
      <Styled.Input
        placeholder={placeholder}
        type={type}
        id={id}
        name={name}
        value={value}
        required={require}
      />
      {description && <Text size="xsmall">{description}</Text>}
    </Styled.Container>
  );
};
