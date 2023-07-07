import * as Styled from './styles';
import { types, circles, schools, order } from '../../api/magics';
import { Text } from '../Text';

export type SelectProps = {
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

export const Select = ({
  placeholder,
  label,
  id,
  name,
  value,
  require,
  multiple,
  description,
}: SelectProps) => {
  return (
    <Styled.Container>
      {label && <Styled.Label htmlFor={id}>{label}:</Styled.Label>}
      <Styled.Select
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        required={require}
        multiple={multiple}
      >
        {name === 'type' &&
          types.map((t, i) => {
            if (t.toLowerCase() === 'todas') {
              return (
                <option key={i} value="all">
                  {t}
                </option>
              );
            } else {
              return <option key={i}>{t}</option>;
            }
          })}
        {name === 'circles' &&
          circles.map((t, i) => {
            return (
              <option key={i} value={t}>
                {t}
              </option>
            );
          })}
        {name === 'schools' &&
          schools.map((t, i) => {
            return (
              <option key={i} value={t}>
                {t}
              </option>
            );
          })}
        {name === 'order' &&
          order.map((t, i) => {
            return (
              <option key={i} value={t}>
                {t}
              </option>
            );
          })}
      </Styled.Select>
      {description && <Text size="xsmall">{description}</Text>}
    </Styled.Container>
  );
};
