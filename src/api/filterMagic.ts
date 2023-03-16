import { MagicProps } from '../components/Magic';
import { magics } from './magics';

export type MagicsfilterArgs = (
  ids?: number[],
  names?: string[],
  type?: string,
  schools?: string[],
  circles?: number[],
) => MagicProps[];

export const magicsfilter: MagicsfilterArgs = (
  ids = [],
  names = [],
  type = '',
  schools = [],
  circles = [],
) => {
  const response = magics.filter((magic) => {
    if (
      ids.length === 0 &&
      names.length === 0 &&
      circles.length === 0 &&
      schools.length === 0 &&
      type.toLowerCase() === 'todas'
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
        (magic.type.toLowerCase() === 'universal' &&
          type.toLowerCase() != 'todas')) &&
      schools.length === 0 &&
      circles.length === 0
    ) {
      return magic;
    }
    if (
      schools.length > 0 &&
      type.toLowerCase() === 'todas' &&
      circles.length === 0
    ) {
      for (const school of schools) {
        if (magic.school.toLowerCase() === school.toLowerCase()) {
          return magic;
        }
      }
    }
    if (
      circles.length > 0 &&
      type.toLowerCase() === 'todas' &&
      schools.length === 0
    ) {
      for (const circle of circles) {
        if (magic.circle === circle) {
          return magic;
        }
      }
    }
    if (
      circles.length > 0 &&
      (type.toLowerCase() !== 'todas' || schools.length > 0)
    ) {
      for (const circle of circles) {
        if (magic.circle === circle) {
          if (type != 'todas' && schools.length === 0) {
            if (
              type.toLowerCase() === magic.type.toLowerCase() ||
              (magic.type.toLowerCase() === 'universal' &&
                type.toLowerCase() != 'todas')
            ) {
              return magic;
            }
          }
          if (schools.length > 0 && type.toLowerCase() === 'todas') {
            for (const school of schools) {
              if (magic.school.toLowerCase() === school.toLowerCase()) {
                return magic;
              }
            }
          }
          if (schools.length > 0 && type.toLowerCase() != 'todas') {
            for (const school of schools) {
              if (
                magic.school.toLowerCase() === school.toLowerCase() &&
                (type.toLowerCase() === magic.type.toLowerCase() ||
                  (magic.type.toLowerCase() === 'universal' &&
                    type.toLowerCase() != 'todas'))
              ) {
                return magic;
              }
            }
          }
        }
      }
    }
  });
  return response;
};
