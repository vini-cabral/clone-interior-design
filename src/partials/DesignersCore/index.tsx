import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import { useContext } from 'react'
// My App
import { SectionTitle } from 'src/components'
import { AppContex } from 'src/context'
import { ITeammate } from 'src/interfaces'
import styles from './styles.module.sass'

export default function DesignersCore({ designersDesc, team }:{ designersDesc: any, team: ITeammate[] | null }) {
  const { ctxHomePageRoutes } = useContext(AppContex)
  return <>
    <SectionTitle>{ `${ctxHomePageRoutes.designers.name}.` }</SectionTitle>
    { designersDesc && <PortableText value={ designersDesc.body }/> }
    <div className={ styles['team'] }>
      {
        Array.isArray(team) && team.map(el => <div key={ el.id } className={ styles['teammate'] }>
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
