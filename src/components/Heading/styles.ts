import styled, { css } from 'styled-components';
import { HeadingProps } from '.';
import { sizes } from '../../styles/sizes';

export const Container = styled.h1<HeadingProps>`
  ${({ theme, size, uppercase }) => css`
    font-size: ${size && sizes[size](theme)};
    text-transform: ${uppercase ? 'uppercase' : 'inherit'}
  `}
`;
