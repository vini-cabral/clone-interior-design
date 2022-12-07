import { handlerResponseParse } from '.'
import { IDataPackages } from 'src/interfaces'

async function serviceGetDataPackage(): Promise<IDataPackages> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/packages`)
  return handlerResponseParse(res)
}

export default serviceGetDataPackage
