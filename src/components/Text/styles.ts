import styled, { css } from 'styled-components';
import { TextProps } from '.';
import { sizes } from '../../styles/sizes';

export const Container = styled.p<TextProps>`
  ${({ theme, size, italic }) => css`
    font-size: ${size && sizes[size](theme)};
    ${italic && `font-style: italic;`}
  `}
`;
