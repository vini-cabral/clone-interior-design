import Image from "next/image"
import { useContext, useEffect } from "react"
// My App
import { SectionTitle } from "src/components"
import { AppContext } from "src/context"
import { IProject } from "src/interfaces"
import styles from "./styles.module.sass"

export default function ShowcaseCore({ showcase }:{ showcase: IProject[] | null }) {
  const { ctxHomePageRoutes, ctxIndexClickPhotoGallery, setCtxIndexClickPhotoGallery, setCtxAssetsPhotoGallery } = useContext(AppContext)

  useEffect(() => {
    showcase && ctxIndexClickPhotoGallery >= 0 && setCtxAssetsPhotoGallery([...showcase])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctxIndexClickPhotoGallery])

  return <>
    <SectionTitle>{ `${ctxHomePageRoutes.showcase.name}.` }</SectionTitle>
    <div className={ styles['showcase'] }>
      {
        Array.isArray(showcase) && showcase.map((el, i) => <div
          className={ styles[i < 2 ? 'card-img-1' : 'card-img-2'] }
          key={ el.id }
          onClick={ () => setCtxIndexClickPhotoGallery(i) }
        >
          <h3>{ el.title }</h3>
          <Image src={ el.thumbnail.src } alt={ el.thumbnail.alt } sizes="auto, auto" fill priority />
        </div>)
      }
    </div>
  </>
}
