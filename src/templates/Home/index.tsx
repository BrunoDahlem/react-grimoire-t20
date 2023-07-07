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
  const [config, setConfig] = useState({
    ids: [],
    names: [],
    type: 'all',
    order: 'a-z',
    schools: [],
    circles: [],
  });
  const [magics, setMagics] = useState([]);

  const handlerOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const namesString: HTMLInputElement = document.querySelector('#name');
    const idString: HTMLInputElement = document.querySelector('#id');
    const typeString: HTMLSelectElement = document.querySelector('#type');
    const schoolsString: HTMLSelectElement = document.querySelector('#schools');
    const circlesString: HTMLSelectElement = document.querySelector('#circles');
    const orderString: HTMLSelectElement = document.querySelector('#order');

    const { ids, names, type, schools, circles, order } = formatResponses(
      idString,
      namesString,
      typeString,
      schoolsString,
      circlesString,
      orderString,
    );
    setConfig({
      ids,
      names,
      type,
      schools,
      circles,
      order,
    });
  };
  useEffect(() => {
    const fn = async () => {
      const { ids, names, type, schools, circles, order } = config;
      setMagics(await fetchData(ids, names, type, schools, circles, order));
    };
    fn();
  }, [config]);

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
