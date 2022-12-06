import type { NextApiRequest, NextApiResponse } from 'next'
// My Project
import { IDataPackages } from 'src/interfaces'

export default function handlerPackages(
  req: NextApiRequest,
  res: NextApiResponse<IDataPackages>
  ) {
  if(req.method === 'GET') {
    res.status(200).json({
      basic: {
        title: 'Básico',
        type: 'Projeto 2D',
        supportTime: 10,
        auxService: 'Fotografia',
        discount: 20,
        message: 'Bons negócios',
        price: 199.99,
      },
      premium: {
        title: 'Premium',
        type: 'Projeto 3D',
        supportTime: 50,
        auxService: 'Fotografia',
        discount: 50,
        message: 'Bons negócios',
        price: 349.99,
      }
    })
  }
}
