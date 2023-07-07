import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing.xxsmall} 0;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
  font-size: ${theme.font.sizes.small};
    padding: ${theme.spacing.xxsmall} 0;
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    padding: ${theme.spacing.xxsmall};
  `}
`;
