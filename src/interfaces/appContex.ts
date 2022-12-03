import IShowcase from "./project"

type TLink = {
  name: string,
  href: string,
  click: boolean,
}

export default interface IAppContex {
  ctxIndexClickPhotoGallery: number
  setCtxIndexClickPhotoGallery: Function
  ctxAssetsPhotoGallery: IShowcase[] | null
  setCtxAssetsPhotoGallery: Function
  ctxHomeLinks: {
    home: TLink,
    showcase: TLink,
    services: TLink,
    designers: TLink,
    packages: TLink,
    contact: TLink,
  }
  setCtxHomeLinks: Function
}
