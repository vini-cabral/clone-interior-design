import { useContext } from "react"
// My App
import { SectionTitle } from "src/components"
import { AppContext } from "src/context"
import Form from "./Form"

export default function ContactCore({ contactDesc }: { contactDesc: any }) {
  const { ctxHomePageRoutes } = useContext(AppContext)
  return <>
    <SectionTitle>{ `${ctxHomePageRoutes.contact.name}.` }</SectionTitle>
    <p>{ contactDesc && contactDesc.description }</p>
    <Form />
  </>
}
