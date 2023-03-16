export const fetchData = async (
  ids: number[] = [],
  names: string[] = [],
  type = '',
  schools: string[] = [],
  circles: number[] = [],
) => {
  const response = await fetch(
    `http://localhost:3000/api/magics/?ids=${ids}&names=${names}&type=${type}&schools=${schools}&circles=${circles}`,
  )
    .then((response) => response.json())
    .then((response) => response);
  return response;
};
export const formatResponses = (
  idsString,
  namesString,
  typeString,
  schoolsString,
  circlesString,
) => {
  const ids = [];
  const type = typeString.value;
  const schools = [];
  const circles = [];
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
  };
};
