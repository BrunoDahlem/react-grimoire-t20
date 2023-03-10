import styled, { css } from 'styled-components';
import { Container as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 50rem;
    padding: ${theme.spacing.xlarge};
    text-align: justify;
    position: relative;
    ${Heading}:first-child {
      color: ${theme.colors.primaryColor};
    }
    ${Heading}:nth-child(2) {
      color: ${theme.colors.gray};
      font-style: italic;
    }
  }
`}
`;

export const HeaderUl = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    column-gap: 3rem;
    row-gap: 0.5rem;
    padding: ${theme.spacing.xxsmall} 0;
  `}
`;

export const ImprovementsUl = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    padding: ${theme.spacing.xxsmall} 0;
    text-align: start;
  `}
`;

export const Li = styled.li`
  ${() => css`
    list-style: none;
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    font-weight: bold;
  `}
`;

export const RequireSpan = styled.span`
  ${() => css`
      font-style: italic;
  `}
`;
