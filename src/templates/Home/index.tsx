import * as Styled from './styles';
import { useState, FormEvent, useEffect } from 'react';

import { Cards } from '../../components/Cards';
import { Form } from '../../components/Form';

import { fields } from '../../mocks/fields';
import { fetchData, formatResponses } from '../../api/fetchData';

export type HomeProps = {
  text: string;
};

export const Home = () => {
  const [ids, setIds] = useState([]);
  const [names, setNames] = useState([]);
  const [type, setType] = useState('todas');
  const [schools, setSchools] = useState([]);
  const [circles, setCircles] = useState([]);
  const [magics, setMagics] = useState([]);

  const handlerOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const namesString: HTMLInputElement = document.querySelector('#name');
    const idString: HTMLInputElement = document.querySelector('#id');
    const typeString: HTMLInputElement = document.querySelector('#type');
    const schoolsString: HTMLSelectElement = document.querySelector('#schools');
    const circlesString: HTMLSelectElement = document.querySelector('#circles');

    const { ids, names, type, schools, circles } = formatResponses(
      idString,
      namesString,
      typeString,
      schoolsString,
      circlesString,
    );
    setIds(ids);
    setNames(names);
    setType(type);
    setSchools(schools);
    setCircles(circles);
  };
  useEffect(() => {
    const fn = async () => {
      setMagics(await fetchData(ids, names, type, schools, circles));
    };
    fn();
  }, [ids, names, type, schools, circles]);

  return (
    <Styled.Container>
      <Form
        fields={fields}
        onSubmit={handlerOnSubmit}
        action="/"
        method="get"
      />
      <Cards magics={magics} />
    </Styled.Container>
  );
};
