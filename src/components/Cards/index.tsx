import { Heading } from '../Heading';
import { Magic, MagicProps } from '../Magic';
import * as Styled from './styles';

export type CardsProps = {
  magics: MagicProps[];
};

export const Cards = ({ magics = [] }: CardsProps) => {
  return (
    <Styled.Container>
      {magics.map((magic) => {
        return <Magic id={magic.id} key={magic.id} {...magic} />;
      })}
      {magics.length === 0 && (
        <Heading as="h2" size="huge">
          Magia(s) não encontrada(s)
        </Heading>
      )}
    </Styled.Container>
  );
};
