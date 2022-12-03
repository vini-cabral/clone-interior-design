import { useContext } from "react"
// My App
import { SectionTitle } from "../../components"
import AppContex from "../../context/AppContex"

export default function ContactCore({ contactDesc }: { contactDesc: any }) {
  const { ctxHomeLinks } = useContext(AppContex)
  return <>
    <SectionTitle>{ `${ctxHomeLinks.contact.name}.` }</SectionTitle>
    <p>{ contactDesc && contactDesc.description }</p>
  </>
}
