import { Heading } from '../Heading';
import { Magic, MagicProps } from '../Magic';
import * as Styled from './styles';

export type CardsProps = {
  data: MagicProps[];
  ids?: number[];
  names?: string[];
  type?: string;
  circles?: number[];
  schools?: string[];
};

export const Cards = ({
  data,
  ids = [],
  names = [],
  type = 'Todas',
  circles = [],
  schools = [],
}: CardsProps) => {
  const magics = data.filter((magic) => {
    if (
      ids.length === 0 &&
      names.length === 0 &&
      circles.length === 0 &&
      schools.length === 0 &&
      type === 'Todas'
    ) {
      return magic;
    }
    if (ids.length > 0) {
      for (const id of ids) {
        if (magic.id === id) {
          return magic;
        }
      }
    }
    if (names.length > 0) {
      for (const name of names) {
        if (magic.name.toLowerCase().includes(name.toLowerCase())) {
          return magic;
        }
      }
    }
    if (
      ((type && type.toLowerCase() === magic.type.toLowerCase()) ||
        (magic.type.toLowerCase() === 'universal' && type != 'Todas')) &&
      schools.length === 0 &&
      circles.length === 0
    ) {
      return magic;
    }
    if (schools.length > 0 && type === 'Todas' && circles.length === 0) {
      for (const school of schools) {
        if (magic.school.toLowerCase() === school.toLowerCase()) {
          return magic;
        }
      }
    }
    if (circles.length > 0 && type === 'Todas' && schools.length === 0) {
      for (const circle of circles) {
        if (magic.circle === circle) {
          return magic;
        }
      }
    }
    if (circles.length > 0 && (type !== 'Todas' || schools.length > 0)) {
      for (const circle of circles) {
        if (magic.circle === circle) {
          if (type != 'Todas' && schools.length === 0) {
            if (
              type.toLowerCase() === magic.type.toLowerCase() ||
              (magic.type.toLowerCase() === 'universal' && type != 'Todas')
            ) {
              return magic;
            }
          }
          if (schools.length > 0 && type === 'Todas') {
            for (const school of schools) {
              if (magic.school.toLowerCase() === school.toLowerCase()) {
                return magic;
              }
            }
          }
          if (schools.length > 0 && type != 'Todas') {
            for (const school of schools) {
              if (
                magic.school.toLowerCase() === school.toLowerCase() &&
                (type.toLowerCase() === magic.type.toLowerCase() ||
                  (magic.type.toLowerCase() === 'universal' && type != 'Todas'))
              ) {
                return magic;
              }
            }
          }
        }
      }
    }
  });
  return (
    <Styled.Container>
      {magics.map((magic) => {
        return <Magic id={magic.id} key={magic.id} {...magic} />;
      })}
      {magics.length === 0 && (
        <Heading as="h2" size="huge">
          Magia(s) não encontrada
        </Heading>
      )}
    </Styled.Container>
  );
};
