import Image from 'next/image'
import { useContext } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
// My App
import styles from './styles.module.sass'
import { Slider } from '../../components'
import AppContex from '../../context/AppContex'

export default function PhotoGallery() {
  const { ctxIndexClickPhotoGallery, setCtxIndexClickPhotoGallery, ctxAssetsPhotoGallery } = useContext(AppContex)
  return <div className={ styles['photo-gallery'] }>
    <span className={ styles['btn-close'] } onClick={ () => setCtxIndexClickPhotoGallery(-1) }>
      <IoCloseOutline />
    </span>
    {
      ctxAssetsPhotoGallery && <Slider index={ ctxIndexClickPhotoGallery } btnArrow height='100%' time={20}>
        {
          ctxAssetsPhotoGallery.map(el => <div key={ el.id } className={ styles['slide'] }>
            <Image src={ el.large.src } alt={ el.large.alt } sizes="auto, auto" fill priority />
          </div>) 
        }
      </Slider>
    }
  </div>
}
