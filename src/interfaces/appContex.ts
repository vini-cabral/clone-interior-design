import { TLayout, TLink } from "src/types"
import { IDataPackages } from "./dataPackage"
import IShowcase from "./project"

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
  setCtxHomeLinks: Function,
  ctxLayout: TLayout,
  setCtxLayout: Function,
  ctxDataPackages: IDataPackages
  setCtxDataPackages: Function
}
