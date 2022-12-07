import { useContext } from "react"
// My App
import { SectionTitle } from "src/components"
import { AppContex } from "src/context"
import Form from "./Form"

export default function ContactCore({ contactDesc }: { contactDesc: any }) {
  const { ctxHomePageRoutes } = useContext(AppContex)
  return <>
    <SectionTitle>{ `${ctxHomePageRoutes.contact.name}.` }</SectionTitle>
    <p>{ contactDesc && contactDesc.description }</p>
    <Form />
  </>
}
