import styles from './styles.module.sass'
import { Footer, Main, Menu, PhotoGallery } from './partials'
import { useContext, useState } from 'react'
import { AppContex } from 'src/context'
import LayoutError from './LayoutError'

function Layout({ children }:{ children: JSX.Element | JSX.Element[] }) {
  const { ctxIndexClickPhotoGallery } = useContext(AppContex)
  return <>
    { ctxIndexClickPhotoGallery >= 0 && <PhotoGallery />}
    <div className={ ctxIndexClickPhotoGallery < 0 ? styles['content'] : `${styles['content']} ${styles['action--hide']}` }>
      <Menu />
      <Main>{ children }</Main>
      <Footer />
    </div>
  </>
}

export {
  LayoutError
}
export default Layout
