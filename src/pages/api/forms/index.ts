import type { NextApiRequest, NextApiResponse } from 'next';
import { forms } from '../../../api/forms';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(forms);
}
