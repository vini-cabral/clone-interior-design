import { createContext } from "react"
// My App
import { IAppContex } from "../interfaces"

const AppContex = createContext<IAppContex>({
  ctxIndexClickPhotoGallery: -1,
  setCtxIndexClickPhotoGallery: () => {},
  ctxAssetsPhotoGallery: null,
  setCtxAssetsPhotoGallery: () => {}
})

export default AppContex
