import type { NextApiRequest, NextApiResponse } from 'next'

export default function sendMessage(
  req: NextApiRequest,
  res: NextApiResponse<{data: string}>
  ) {
  if(req.method === 'POST') {
    const body = JSON.parse(req.body)
    // console.log(body)
    res.status(200).json({ data: `Muito obrigado ${body.name}, mensagem enviada com sucesso! Entraremos em contato o mais rápido possível!` })
  }
}
