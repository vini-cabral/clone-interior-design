import { createContext } from "react"
// My App
import { IAppContex } from "src/interfaces"

export const initHomeLinks = {
  home: {
    name: 'Home',
    href: '/#home',
    click: false
  },
  showcase: {
    name: 'Showcase',
    href: '/#showcase',
    click: false
  },
  services: {
    name: 'Serviços',
    href: '/#services',
    click: false
  },
  designers: {
    name: 'Designers',
    href: '/#designers',
    click: false
  },
  packages: {
    name: 'Pacotes',
    href: '/#packages',
    click: false
  },
  contact: {
    name: 'Contato',
    href: '/#contact',
    click: false
  }
}

const AppContex = createContext<IAppContex>({
  ctxIndexClickPhotoGallery: -1,
  setCtxIndexClickPhotoGallery: () => {},
  ctxAssetsPhotoGallery: null,
  setCtxAssetsPhotoGallery: () => {},
  ctxHomeLinks: initHomeLinks,
  setCtxHomeLinks: () => {}
})

export default AppContex
