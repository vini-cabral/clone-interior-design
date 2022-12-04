import { useContext } from "react"
// My App
import { SectionTitle } from "src/components"
import AppContex from "src/context/AppContex"

export default function PackagesCore({ packagesDesc }: {  packagesDesc: any }) {
  const { ctxHomeLinks } = useContext(AppContex)
  return <>
    <SectionTitle>{ `${ctxHomeLinks.packages.name}.` }</SectionTitle>
    <p>{ packagesDesc && packagesDesc.description }</p>
  </>
}
