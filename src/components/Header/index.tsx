import * as Styled from './styles';

export type HeaderProps = {
  text: string;
};

export const Header = ({ text }: HeaderProps) => {
  return <Styled.Container>{text}</Styled.Container>;
};
