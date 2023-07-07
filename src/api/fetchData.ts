export const fetchData = async (
  ids: number[] = [],
  names: string[] = [],
  type = 'all',
  schools: string[] = [],
  circles: number[] = [],
  order = 'a-z',
) => {
  const response = await fetch(
    `http://localhost:3000/api/magics/?ids=${ids}&names=${names}&type=${type}&schools=${schools}&circles=${circles}&order=${order}`,
  )
    .then((response) => response.json())
    .then((response) => response);
  return response;
};

export type FormatResponsesArgs = (
  idsString?: HTMLInputElement,
  namesString?: HTMLInputElement,
  typeString?: HTMLSelectElement,
  schoolsString?: HTMLSelectElement,
  circlesString?: HTMLSelectElement,
  orderString?: HTMLSelectElement,
) => {
  ids: number[];
  names: string[];
  type: string;
  schools: string[];
  circles: string[];
  order: string;
};

export const formatResponses: FormatResponsesArgs = (
  idsString,
  namesString,
  typeString,
  schoolsString,
  circlesString,
  orderString,
) => {
  const ids = [];
  const type = typeString.value;
  const schools = [];
  const circles = [];
  const order = orderString.value;
  const names = namesString.value.split(',');
  if (names[0] === '') {
    names.pop();
  }
  const idsStrings = idsString.value.split(',');
  if (idsStrings[0] !== '') {
    for (const i of idsStrings) {
      ids.push(parseInt(i));
    }
  }
  if (schoolsString.length > 0) {
    for (let i = 0; i < schoolsString.options.length; i++) {
      if (schoolsString.options[i].selected) {
        schools.push(schoolsString.options[i].value);
      }
    }
  }
  if (circlesString.length > 0) {
    for (let i = 0; i < circlesString.options.length; i++) {
      if (circlesString.options[i].selected) {
        circles.push(parseInt(circlesString.options[i].value));
      }
    }
  }
  return {
    ids,
    names,
    type,
    schools,
    circles,
    order,
  };
};
