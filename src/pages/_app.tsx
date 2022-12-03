import type { AppProps } from 'next/app'
import { useState } from 'react'
// My App
import '../styles/settings/css/reset.css'
import '../styles/globals.sass'
import Layout from '../layout'
import AppContex, { initHomeLinks } from '../context/AppContex'
import { IProject } from '../interfaces'

export default function App({ Component, pageProps }: AppProps) {
  const [ctxIndexClickPhotoGallery, setCtxIndexClickPhotoGallery] = useState(-1)
  const [ctxAssetsPhotoGallery, setCtxAssetsPhotoGallery] = useState<IProject[] | null>(null)
  const [ctxHomeLinks, setCtxHomeLinks] = useState(initHomeLinks)
  return <AppContex.Provider value={
    {
      ctxIndexClickPhotoGallery,
      setCtxIndexClickPhotoGallery,
      ctxAssetsPhotoGallery,
      setCtxAssetsPhotoGallery,
      ctxHomeLinks, setCtxHomeLinks
    }
  }>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppContex.Provider>
}
