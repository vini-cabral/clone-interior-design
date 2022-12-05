import { useContext } from "react"
// My App
import { SectionTitle } from "src/components"
import { AppContex } from "src/context"
import Form from "./Form"

export default function ContactCore({ contactDesc }: { contactDesc: any }) {
  const { ctxHomeLinks } = useContext(AppContex)
  return <>
    <SectionTitle>{ `${ctxHomeLinks.contact.name}.` }</SectionTitle>
    <p>{ contactDesc && contactDesc.description }</p>
    <Form />
  </>
}
