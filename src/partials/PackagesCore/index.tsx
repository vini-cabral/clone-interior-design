import { useContext } from "react"
// My App
import { SectionTitle } from "../../components"
import AppContex from "../../context/AppContex"

export default function PackagesCore({ packagesDesc }: {  packagesDesc: any }) {
  const { ctxHomeLinks } = useContext(AppContex)
  return <>
    <SectionTitle>{ `${ctxHomeLinks.packages.name}.` }</SectionTitle>
    <p>{ packagesDesc && packagesDesc.description }</p>
  </>
}
