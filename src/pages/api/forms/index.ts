import type { NextApiRequest, NextApiResponse } from 'next';
//import { forms } from '../../../api/forms';
import { fetchDataForms } from '../../../api/fetchData';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   res.status(200).json(forms);
// }

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == 'POST') {
    res.status(200).json(await fetchDataForms());
  } else {
    res.status(200).json({ message: 'Somente metodos POST' });
  }
};
export default handler;
