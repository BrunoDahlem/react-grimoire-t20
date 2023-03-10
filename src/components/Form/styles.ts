import styled, { css } from 'styled-components';

export const Container = styled.form`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 0.5rem;
    column-gap: 2rem;
    padding: ${theme.spacing.xxsmall};
  `}
`;
