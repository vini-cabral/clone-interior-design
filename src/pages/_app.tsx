import type { AppProps } from 'next/app'
import { useState } from 'react'
// My App
import 'src/styles/settings/css/reset.css'
import 'src/styles/globals.sass'
import { LayoutMain } from 'src/layout'
import { AppContext, initHomePageRoutes } from 'src/context'
import { IProject } from 'src/interfaces'
import { TLayout } from 'src/types'
import { PhotoGallery } from '../layout/partials'

let renderLayout: JSX.Element
export default function App({ Component, pageProps }: AppProps) {
  const [ctxIndexClickPhotoGallery, setCtxIndexClickPhotoGallery] = useState(-1)
  const [ctxAssetsPhotoGallery, setCtxAssetsPhotoGallery] = useState<IProject[] | null>(null)
  const [ctxHomePageRoutes, setCtxHomePageRoutes] = useState(initHomePageRoutes)
  const [ctxLayout, setCtxLayout] = useState<TLayout>('main')
  const [ctxContactFeedback, setCtxContactFeedback] = useState(null)

  renderLayout = <Component {...pageProps} />

  if(ctxLayout == 'main') {
    renderLayout = <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  }

  return <AppContext.Provider value={
    {
      ctxIndexClickPhotoGallery,setCtxIndexClickPhotoGallery,
      ctxAssetsPhotoGallery,setCtxAssetsPhotoGallery,
      ctxHomePageRoutes,setCtxHomePageRoutes,
      ctxLayout,setCtxLayout,
      ctxContactFeedback,setCtxContactFeedback
    }
  }>
    <>
      { ctxLayout !== null && ctxIndexClickPhotoGallery >= 0 && <div id='__app-modal'><PhotoGallery /></div> }
      <div id='__app-content'>{ renderLayout }</div>
    </>
  </AppContext.Provider>
}
