import type { AppProps } from 'next/app'
import { useState } from 'react'
// My App
import '../styles/settings/css/reset.css'
import '../styles/globals.sass'
import Layout from '../Layout'
import AppContex from '../context/AppContex'
import { IShowcase } from '../interfaces'

export default function App({ Component, pageProps }: AppProps) {
  const [ctxIndexClickPhotoGallery, setCtxIndexClickPhotoGallery] = useState(-1)
  const [ctxAssetsPhotoGallery, setCtxAssetsPhotoGallery] = useState<IShowcase[] | null>(null)
  return <AppContex.Provider value={
    {
      ctxIndexClickPhotoGallery,
      setCtxIndexClickPhotoGallery,
      ctxAssetsPhotoGallery,
      setCtxAssetsPhotoGallery
    }
  }>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppContex.Provider>
}
