import { MagicProps } from '../components/Magic';
import { magics } from './magics';

export type MagicsfilterArgs = (
  ids?: number[],
  names?: string[],
  type?: string,
  schools?: string[],
  circles?: number[],
  order?: string,
) => MagicProps[];

export const magicsfilter: MagicsfilterArgs = (
  ids = [],
  names = [],
  type = '',
  schools = [],
  circles = [],
  order = 'a-z',
) => {
  const response = magics.filter((magic) => {
    if (
      ids.length === 0 &&
      names.length === 0 &&
      circles.length === 0 &&
      schools.length === 0 &&
      (type.toLowerCase() === 'all' || type === '')
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
          type.toLowerCase() != 'all')) &&
      schools.length === 0 &&
      circles.length === 0
    ) {
      return magic;
    }
    if (
      schools.length > 0 &&
      type.toLowerCase() === 'all' &&
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
      type.toLowerCase() === 'all' &&
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
      (type.toLowerCase() !== 'all' || schools.length > 0)
    ) {
      for (const circle of circles) {
        if (magic.circle === circle) {
          if (type != 'all' && schools.length === 0) {
            if (
              type.toLowerCase() === magic.type.toLowerCase() ||
              (magic.type.toLowerCase() === 'universal' &&
                type.toLowerCase() != 'all')
            ) {
              return magic;
            }
          }
          if (schools.length > 0 && type.toLowerCase() === 'all') {
            for (const school of schools) {
              if (magic.school.toLowerCase() === school.toLowerCase()) {
                return magic;
              }
            }
          }
          if (schools.length > 0 && type.toLowerCase() != 'all') {
            for (const school of schools) {
              if (
                magic.school.toLowerCase() === school.toLowerCase() &&
                (type.toLowerCase() === magic.type.toLowerCase() ||
                  (magic.type.toLowerCase() === 'universal' &&
                    type.toLowerCase() != 'all'))
              ) {
                return magic;
              }
            }
          }
        }
      }
    }
  });
  const responseSort = response.sort((item1, item2) => {
    if (order === 'a-z') {
      return item1.name.toLowerCase().localeCompare(item2.name.toLowerCase());
    }
    if (order === 'z-a') {
      return item2.name.toLowerCase().localeCompare(item1.name.toLowerCase());
    }
    if (order === 'circle-asc') {
      return item1.circle - item2.circle;
    }
    if (order === 'circle-desc') {
      return item2.circle - item1.circle;
    }
  });
  return responseSort;
};
