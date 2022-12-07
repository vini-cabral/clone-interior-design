import serviceGetDataPackage from "./packages"

function handlerResponseParse(res: Response) {
  if(res.ok) {
    return res.json()
  } else {
    throw new Error(res.statusText)
  }
}

export {
  handlerResponseParse,
  serviceGetDataPackage
}
