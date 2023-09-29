import { NextApiRequest, NextApiResponse } from 'next';

const URL = process.env.DB_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  
  switch (method) {
    case 'POST':
      try {
        if (!URL) {
            res.status(200).json({ status: 'ERROR', data: {}, message: "Url not found" });
            return
        }
        const resp = await fetch(URL, {
          method: 'POST',
          body: body,
        });
        res.status(200).json({ status: 'success', data: resp });
      } catch (e) {
        console.error(e);
        res.status(404).json({ status: 'error', message: 'query have not raised.' });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).send(`Method ${method} is not allowed.`);
      break;
  }
}
