import { ReactNode } from 'react';
import * as Styled from './styles';

export type TextProps = {
  children: string | ReactNode;
  size?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge'
    | 'xhuge';
  italic?: boolean;
};

export const Text = ({ children, size = 'medium', italic }: TextProps) => {
  return (
    <Styled.Container italic={italic} size={size}>
      {children}
    </Styled.Container>
  );
};
