import styled, { css } from 'styled-components';

import { Container as Form } from '../../components/Form/styles';
import { Container as Text } from '../../components/Text/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${Form} {
      border-bottom: 0.1rem solid ${theme.colors.mediumGray};
      padding: ${theme.spacing.xxsmall} ${theme.spacing.large};
      label {
        color: ${theme.colors.primaryColor};
      }
      input, select {
        border: 0.2rem solid ${theme.colors.primaryColor};
        border-radius: 1rem;
        padding: ${theme.spacing.small} ${theme.spacing.medium};
        ::-webkit-scrollbar {
          width: 0.5rem;
          border-radius: 2rem;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 1.4rem;
        }
        ::-webkit-scrollbar-thumb {
          background: ${theme.colors.primaryColor};
          border-radius: 1.4rem;
        }
        ::-webkit-scrollbar-thumb:hover {
          filter: brightness(0.1rem);
        }
      }
      input[type='submit'] {
        background: ${theme.colors.primaryColor};
        color: ${theme.colors.white};
      }
      input[type='submit'] , select {
        cursor: pointer;
    }
    ${Text} {
      padding: ${theme.spacing.xsmall} 0;
      color: ${theme.colors.primaryColor};
    }
  `}
`;
