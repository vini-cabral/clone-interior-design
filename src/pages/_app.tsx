import type { AppProps } from 'next/app'
import { useState } from 'react'
// My App
import 'src/styles/settings/css/reset.css'
import 'src/styles/globals.sass'
import Layout, { LayoutError } from 'src/layout'
import { AppContex, initDataPackages, initAppRoutes } from 'src/context'
import { IProject } from 'src/interfaces'
import { TLayout } from 'src/types'

export default function App({ Component, pageProps }: AppProps) {
  const [ctxIndexClickPhotoGallery, setCtxIndexClickPhotoGallery] = useState(-1)
  const [ctxAssetsPhotoGallery, setCtxAssetsPhotoGallery] = useState<IProject[] | null>(null)
  const [ctxAppRoutes, setCtxAppRoutes] = useState(initAppRoutes)
  const [ctxLayout,setCtxLayout] = useState<TLayout>('std')
  const [ctxDataPackages, setCtxDataPackages] = useState(initDataPackages)

  return <AppContex.Provider value={
    {
      ctxIndexClickPhotoGallery,
      setCtxIndexClickPhotoGallery,
      ctxAssetsPhotoGallery,
      setCtxAssetsPhotoGallery,
      ctxAppRoutes, setCtxAppRoutes,
      ctxLayout, setCtxLayout,
      ctxDataPackages, setCtxDataPackages
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
  </AppContex.Provider>
}
