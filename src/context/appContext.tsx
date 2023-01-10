import { createContext } from "react"
// My App
import { IAppContext, IDataPackages } from "src/interfaces"

export const initHomePageRoutes = {
  home: {
    name: 'Home',
    href: '/#home',
    click: false,
  },
  showcase: {
    name: 'Showcase',
    href: '/#showcase',
    click: false,
  },
  services: {
    name: 'Serviços',
    href: '/#services',
    click: false,
  },
  designers: {
    name: 'Designers',
    href: '/#designers',
    click: false,
  },
  packages: {
    name: 'Pacotes',
    href: '/#packages',
    click: false,
  },
  contact: {
    name: 'Contato',
    href: '/#contact',
    click: false,
  }
}

export const initDataPackages: IDataPackages = {
  basic: {
    title: null,
    type: null,
    supportTime: null,
    auxService: null,
    discount: null,
    message: null,
    price: null,
  },
  premium: {
    title: null,
    type: null,
    supportTime: null,
    auxService: null,
    discount: null,
    message: null,
    price: null,
  }
}

export const AppContext = createContext<IAppContext>({
  ctxIndexClickPhotoGallery: -1,
  setCtxIndexClickPhotoGallery: () => {},
  ctxAssetsPhotoGallery: null,
  setCtxAssetsPhotoGallery: () => {},
  ctxHomePageRoutes: initHomePageRoutes,
  setCtxHomePageRoutes: () => {},
  ctxLayout: 'main',
  setCtxLayout: () => {},
  ctxDataPackages: initDataPackages,
  setCtxDataPackages: () => {},
  ctxContactFeedback: null,
  setCtxContactFeedback: () => {}
})
