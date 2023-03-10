import * as Styled from './styles';

export type ComponentProps = {
  text: string;
}

export const Component = ({ text }) => {
  return (<Styled.Container>{text}</Styled.Container>);
};
