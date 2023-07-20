import type { NextApiRequest, NextApiResponse } from 'next';
//import { forms } from '../../../api/forms';
//import { fetchDataForms } from '../../../api/fetchData';
import { options } from '../../../api/optionsForms';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   res.status(200).json(forms);
// }

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(options);
};
export default handler;
