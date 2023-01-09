import type { AppProps } from 'next/app'
import { useState } from 'react'
// My App
import 'src/styles/settings/css/reset.css'
import 'src/styles/globals.sass'
import Layout, { LayoutError } from 'src/layout'
import { AppContext, initDataPackages, initHomePageRoutes } from 'src/context'
import { IProject } from 'src/interfaces'
import { TLayout } from 'src/types'

export default function App({ Component, pageProps }: AppProps) {
  const [ctxIndexClickPhotoGallery, setCtxIndexClickPhotoGallery] = useState(-1)
  const [ctxAssetsPhotoGallery, setCtxAssetsPhotoGallery] = useState<IProject[] | null>(null)
  const [ctxHomePageRoutes, setCtxHomePageRoutes] = useState(initHomePageRoutes)
  const [ctxLayout,setCtxLayout] = useState<TLayout>('std')
  const [ctxDataPackages, setCtxDataPackages] = useState(initDataPackages)
  const [ctxContactFeedback, setCtxContactFeedback] = useState(null)

  return <AppContext.Provider value={
    {
      ctxIndexClickPhotoGallery,
      setCtxIndexClickPhotoGallery,
      ctxAssetsPhotoGallery,
      setCtxAssetsPhotoGallery,
      ctxHomePageRoutes, setCtxHomePageRoutes,
      ctxLayout, setCtxLayout,
      ctxDataPackages, setCtxDataPackages,
      ctxContactFeedback, setCtxContactFeedback
    }
  }>
    {
      ctxLayout === 'std' && <Layout>
        <Component {...pageProps} />
      </Layout>
    }
    { 
      ctxLayout === 'error' && <LayoutError>
        <Component {...pageProps} />
      </LayoutError>
    }
  </AppContext.Provider>
}
