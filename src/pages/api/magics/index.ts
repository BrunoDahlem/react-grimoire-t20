// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { magicsfilter } from '../../../api/filterMagic';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    ids: idString,
    names: namesString,
    type,
    schools: schoolsString,
    circles: circlesString,
    order,
  } = req.query;
  const ids = [];
  const names = [];
  const schools = [];
  const circles = [];

  if (idString) {
    const idRaw = idString.toString().split(',');
    for (const id of idRaw) {
      ids.push(parseInt(id));
    }
  }
  if (namesString) {
    const namesRaw = namesString.toString().split(',');
    for (const name of namesRaw) {
      names.push(name);
    }
  }
  if (schoolsString) {
    const schoolsRaw = schoolsString.toString().split(',');
    for (const school of schoolsRaw) {
      schools.push(school);
    }
  }
  if (circlesString) {
    const circlesRaw = circlesString.toString().split(',');
    for (const circle of circlesRaw) {
      circles.push(parseInt(circle));
    }
  }
  res
    .status(200)
    .json(
      magicsfilter(
        ids,
        names,
        type as string,
        schools,
        circles,
        order as string,
      ),
    );
}
