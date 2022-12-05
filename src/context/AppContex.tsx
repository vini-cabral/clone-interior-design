import { createContext } from "react"
// My App
import { IAppContex, IDataPackages } from "src/interfaces"

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

export const initDataPackages: IDataPackages = {
  basic: {
    type: 'Projeto 2D',
    supportTime: 0,
    auxService: 'Description',
    discount: 0,
    message: 'Description',
    price: 0,
  },
  pro: {
    type: 'Projeto 3D',
    supportTime: 0,
    auxService: 'Description',
    discount: 0,
    message: 'Description',
    price: 0,
  }
}

export const AppContex = createContext<IAppContex>({
  ctxIndexClickPhotoGallery: -1,
  setCtxIndexClickPhotoGallery: () => {},
  ctxAssetsPhotoGallery: null,
  setCtxAssetsPhotoGallery: () => {},
  ctxHomeLinks: initHomeLinks,
  setCtxHomeLinks: () => {},
  ctxLayout: 'std',
  setCtxLayout: () => {},
  ctxDataPackages: initDataPackages,
  setCtxDataPackages: () => {},
})
