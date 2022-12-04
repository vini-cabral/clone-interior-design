import type { AppProps } from 'next/app'
import { useState } from 'react'
// My App
import 'src/styles/settings/css/reset.css'
import 'src/styles/globals.sass'
import Layout from 'src/layout'
import AppContex, { initHomeLinks } from 'src/context/AppContex'
import { IProject } from 'src/interfaces'
import { TLayout } from 'src/types'

export default function App({ Component, pageProps }: AppProps) {
  const [ctxIndexClickPhotoGallery, setCtxIndexClickPhotoGallery] = useState(-1)
  const [ctxAssetsPhotoGallery, setCtxAssetsPhotoGallery] = useState<IProject[] | null>(null)
  const [ctxHomeLinks, setCtxHomeLinks] = useState(initHomeLinks)
  const [ctxLayout,setCtxLayout] = useState<TLayout>('std')

  return <AppContex.Provider value={
    {
      ctxIndexClickPhotoGallery,
      setCtxIndexClickPhotoGallery,
      ctxAssetsPhotoGallery,
      setCtxAssetsPhotoGallery,
      ctxHomeLinks, setCtxHomeLinks,
      ctxLayout, setCtxLayout
    }
  }>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppContex.Provider>
}
