import { IProject } from "."
import { IHomePageRoutes } from "."
import { TLayout } from "src/types"

export default interface IAppContex {
  ctxIndexClickPhotoGallery: number
  setCtxIndexClickPhotoGallery: Function
  ctxAssetsPhotoGallery: IProject[] | null
  setCtxAssetsPhotoGallery: Function
  ctxHomePageRoutes: IHomePageRoutes
  setCtxHomePageRoutes: Function
  ctxLayout: TLayout
  setCtxLayout: Function
  ctxContactFeedback: string | null
  setCtxContactFeedback: Function
}
