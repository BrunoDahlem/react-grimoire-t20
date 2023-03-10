import * as Styled from './styles';
import { useState } from 'react';

import { Cards } from '../../components/Cards';
import { magics } from '../../api/magics';
import { Form } from '../../components/Form';

import { fields } from '../../mocks/fields';

export type HomeProps = {
  text: string;
};

export const Home = () => {
  const [names, setNames] = useState([]);
  const [ids, setIds] = useState([]);
  const [type, setType] = useState('Todas');
  const [schools, setSchools] = useState([]);
  const [circles, setCircles] = useState([]);
  const magicsT20 = magics.magicsT20;

  const handlerOnSubmit = (e: Event) => {
    e.preventDefault();
    const name: HTMLInputElement = document.querySelector('#name');
    const names = name.value.split(',');
    if (names[0] === '') {
      names.pop();
    }
    const id: HTMLInputElement = document.querySelector('#id');
    const ids = [];
    const idsString = id.value.split(',');
    if (idsString[0] !== '') {
      for (const i of idsString) {
        ids.push(parseInt(i));
      }
    }
    const type: HTMLInputElement = document.querySelector('#type');
    const schoolsSelect: HTMLSelectElement = document.querySelector('#schools');
    const schools = [];
    if (schoolsSelect.length > 0) {
      for (let i = 0; i < schoolsSelect.options.length; i++) {
        if (schoolsSelect.options[i].selected) {
          schools.push(schoolsSelect.options[i].value);
        }
      }
    }
    const circles = [];
    const circlesSelect: HTMLSelectElement = document.querySelector('#circles');
    if (circlesSelect.length > 0) {
      for (let i = 0; i < circlesSelect.options.length; i++) {
        if (circlesSelect.options[i].selected) {
          circles.push(parseInt(circlesSelect.options[i].value));
        }
      }
    }

    setNames(names);
    setIds(ids);
    setType(type.value);
    setSchools(schools);
    setCircles(circles);
    console.log(ids);
    console.log(names);
    console.log(type.value);
    console.log(schools);
    console.log(circles);
  };

  return (
    <Styled.Container>
      <Form
        fields={fields}
        onSubmit={handlerOnSubmit}
        action="/"
        method="get"
      />
      <Cards
        data={magicsT20}
        names={names}
        ids={ids}
        circles={circles}
        schools={schools}
        type={type}
      />
    </Styled.Container>
  );
};
