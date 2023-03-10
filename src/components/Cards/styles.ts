import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing.medium};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
    gap: 4rem;
  `}
`;
