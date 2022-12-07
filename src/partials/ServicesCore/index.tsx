import {PortableText} from '@portabletext/react'
import { useContext } from 'react'
// My App
import { SectionTitle } from 'src/components'
import { AppContex } from 'src/context'

export default function ServicesCore({ servicesDesc }:{ servicesDesc: any }) {
  const { ctxHomePageRoutes } = useContext(AppContex)
  return <>
    <SectionTitle>{ `${ctxHomePageRoutes.services.name}.` }</SectionTitle>
    { servicesDesc &&  <PortableText value={ servicesDesc.body }/> }
  </>
}
