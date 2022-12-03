import {PortableText} from '@portabletext/react'
import { useContext } from 'react'
// My App
import { SectionTitle } from "../../components"
import AppContex from '../../context/AppContex'

export default function ServicesCore({ servicesDesc }:{ servicesDesc: any }) {
  const { ctxHomeLinks } = useContext(AppContex)
  return <>
    <SectionTitle>{ `${ctxHomeLinks.services.name}.` }</SectionTitle>
    { servicesDesc &&  <PortableText value={ servicesDesc.body }/> }
  </>
}
