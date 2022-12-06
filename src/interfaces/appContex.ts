import { TLayout } from "src/types"
import { IDataPackages } from "./dataPackage"
import IShowcase from "./project"
import IAppRoutes from "./appRoutes"

export default interface IAppContex {
  ctxIndexClickPhotoGallery: number
  setCtxIndexClickPhotoGallery: Function
  ctxAssetsPhotoGallery: IShowcase[] | null
  setCtxAssetsPhotoGallery: Function
  ctxAppRoutes: IAppRoutes
  setCtxAppRoutes: Function
  ctxLayout: TLayout
  setCtxLayout: Function
  ctxDataPackages: IDataPackages
  setCtxDataPackages: Function
}
