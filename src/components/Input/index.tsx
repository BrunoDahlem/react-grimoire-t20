import * as Styled from './styles';
import { types, circles, schools } from '../../api/magics';

export type InputProps = {
  id?: string;
  type: string;
  name: string;
  require: boolean;
  placeholder?: string;
  label?: string;
  value?: string;
  multiple?: boolean;
};

export const Input = ({
  type,
  placeholder,
  label,
  id,
  name,
  value,
  require,
  multiple,
}: InputProps) => {
  return (
    <Styled.Container>
      {label && <Styled.Label htmlFor={id}>{label}:</Styled.Label>}
      {type != 'select' && (
        <Styled.Input
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          value={value}
          required={require}
        />
      )}
      {type === 'select' && (
        <Styled.Select
          placeholder={placeholder}
          type="select"
          id={id}
          name={name}
          value={value}
          required={require}
          multiple={multiple}
        >
          {name === 'type' &&
            types.map((t, i) => {
              return <option key={i}>{t}</option>;
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
        </Styled.Select>
      )}
    </Styled.Container>
  );
};