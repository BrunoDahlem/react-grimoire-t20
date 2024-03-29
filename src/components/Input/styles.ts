import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing.xxsmall} 0;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    caret-color: ${theme.colors.secondaryColor};
    padding: ${theme.spacing.xxsmall};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
  font-size: ${theme.font.sizes.small};
    padding: ${theme.spacing.xxsmall} 0;
  `}
`;
