import {PortableText} from '@portabletext/react'
import { useContext } from 'react'
// My App
import { SectionTitle } from 'src/components'
import { AppContext } from 'src/context'

export default function ServicesCore({ services }:{ services: any }) {
  const { ctxHomePageRoutes } = useContext(AppContext)
  return <>
    <SectionTitle>{ `${ctxHomePageRoutes.services.name}.` }</SectionTitle>
    { services &&  <PortableText value={ services.body }/> }
  </>
}
