import { TLayout } from "src/types"
import { IDataPackages } from "./dataPackage"
import IShowcase from "./project"
import IHomePageRoutes from "./homePageRoutes"

export default interface IAppContex {
  ctxIndexClickPhotoGallery: number
  setCtxIndexClickPhotoGallery: Function
  ctxAssetsPhotoGallery: IShowcase[] | null
  setCtxAssetsPhotoGallery: Function
  ctxHomePageRoutes: IHomePageRoutes
  setCtxHomePageRoutes: Function
  ctxLayout: TLayout
  setCtxLayout: Function
  ctxDataPackages: IDataPackages
  setCtxDataPackages: Function
  ctxContactFeedback: string | null
  setCtxContactFeedback: Function
}
