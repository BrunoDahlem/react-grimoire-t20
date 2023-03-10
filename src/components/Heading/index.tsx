import * as Styled from './styles';

export type HeadingProps = {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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
  uppercase?: boolean;
};

export const Heading = ({
  children,
  as = 'h1',
  size = 'medium',
  uppercase = false,
}: HeadingProps) => {
  return (
    <Styled.Container size={size} uppercase={uppercase} as={as}>
      {children}
    </Styled.Container>
  );
};
