import IShowcase from "./showcase"

export default interface IAppContex {
  ctxIndexClickPhotoGallery: number
  setCtxIndexClickPhotoGallery: Function
  ctxAssetsPhotoGallery: IShowcase[] | null
  setCtxAssetsPhotoGallery: Function
}
