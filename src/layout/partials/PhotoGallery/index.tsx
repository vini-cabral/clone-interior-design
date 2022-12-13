import Image from 'next/image'
import { useContext } from 'react'
// My App
import styles from './styles.module.sass'
import { Slider } from 'src/components'
import { AppContex } from 'src/context'

export default function PhotoGallery() {
  const { ctxIndexClickPhotoGallery, setCtxIndexClickPhotoGallery, ctxAssetsPhotoGallery } = useContext(AppContex)
  return <div className={ styles['photo-gallery'] }>
    {
      ctxAssetsPhotoGallery && <Slider
        height='100%'
        index={ ctxIndexClickPhotoGallery }
        btnArrow={ true }
        btnCaption={ false }
        autoSliding={ true }
        timeSliding={15}
        autoHideBtns={ true }
        timeHideBtns={2}
        color1="#F0F1F2"
        color2="#F44336"
        color3="#585858"
        handleClose={ setCtxIndexClickPhotoGallery }
      >
        {
          ctxAssetsPhotoGallery.map(el => <div key={ el.id } className={ styles['slide'] }>
            <Image src={ el.large.src } alt={ el.large.alt } sizes="auto, auto" fill priority />
          </div>) 
        }
      </Slider>
    }
  </div>
}
