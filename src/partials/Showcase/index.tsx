import Image from "next/image"
import { useContext, useEffect } from "react"
// My App
import { SectionTitle } from "../../components"
import AppContex from "../../context/AppContex"
import { IShowcase } from "../../interfaces"
import styles from './styles.module.sass'

export default function Showcase({ showcase }:{ showcase: IShowcase[] }) {
  const { ctxIndexClickPhotoGallery, setCtxIndexClickPhotoGallery, setCtxAssetsPhotoGallery } = useContext(AppContex)

  useEffect(() => {
    ctxIndexClickPhotoGallery >= 0 && setCtxAssetsPhotoGallery([...showcase])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctxIndexClickPhotoGallery])

  return <>
    <SectionTitle>Showcase.</SectionTitle>
    <div className={ styles['showcase'] }>
      {
        Array.isArray(showcase) && showcase.map((el, i) => <div
          className={ styles[i < 2 ? 'card-img-1' : 'card-img-2'] }
          key={ el.id }
          onClick={ () => setCtxIndexClickPhotoGallery(i) }
        >
          <Image
            src={ el.thumbnail.src }
            alt={ el.thumbnail.alt }
            sizes="auto, auto"
            fill
            priority
          />
        </div>)
      }
    </div>
  </>
}
