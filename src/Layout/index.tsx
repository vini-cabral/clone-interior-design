import styles from './styles.module.sass'
import Menu from "./Menu"
import Main from './Main'
import Footer from './Footer'
import PhotoGallery from './PhotoGallery'
import { useContext } from 'react'
import AppContex from '../context/AppContex'

export default function Layout({ children }:{ children: JSX.Element | JSX.Element[] }) {
  const { ctxIndexClickPhotoGallery } = useContext(AppContex)
  return <>
    { ctxIndexClickPhotoGallery >= 0 && <PhotoGallery />}
    <div className={ ctxIndexClickPhotoGallery < 0 ? styles['content'] : `${styles['content']} ${styles['action--test']}` }>
      <Menu />
      <Main>{ children }</Main>
      <Footer>
        <p>Footer</p>
      </Footer>
    </div>
  </>
}
