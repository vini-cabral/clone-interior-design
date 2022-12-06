import { useContext } from "react"
// My App
import { SectionTitle } from "src/components"
import { AppContex } from "src/context"
import Form from "./Form"

export default function ContactCore({ contactDesc }: { contactDesc: any }) {
  const { ctxAppRoutes } = useContext(AppContex)
  return <>
    <SectionTitle>{ `${ctxAppRoutes.contact.name}.` }</SectionTitle>
    <p>{ contactDesc && contactDesc.description }</p>
    <Form />
  </>
}
