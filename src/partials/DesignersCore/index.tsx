import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import { useContext } from 'react'
// My App
import { SectionTitle } from 'src/components'
import { AppContext } from 'src/context'
import { IDesigner } from 'src/interfaces'
import styles from './styles.module.sass'

export default function DesignersCore({ designersPart1, designersPart2 }:{ designersPart1: any, designersPart2: IDesigner[] | null }) {
  const { ctxHomePageRoutes } = useContext(AppContext)
  return <>
    <SectionTitle>{ `${ctxHomePageRoutes.designers.name}.` }</SectionTitle>
    { designersPart1 && <PortableText value={ designersPart1.body }/> }
    <div className={ styles['team'] }>
      {
        Array.isArray(designersPart2) && designersPart2.map(el => <div key={ el.id } className={ styles['teammate'] }>
          <div>
            <Image src={ el.image.src } alt={ el.image.alt } sizes="auto, auto" fill priority />
          </div>
          <div>
            <h4>{ el.name }</h4>
            <h5>{ el.position }</h5>
            <p>{ el.description }</p>
          </div>
        </div>)
      }
    </div>
  </>
}
