import { IDataPackages } from 'src/interfaces'

function handlerResponseParse(res: Response) {
  if(res.ok) {
    return res.json()
  } else {
    throw new Error(res.statusText)
  }
}

async function serviceGetDataPackage(): Promise<IDataPackages> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/packages`)
  return handlerResponseParse(res)
}

export default serviceGetDataPackage
