import { useEffect } from "react"
import { useContext } from "react"
// My App
import AppContex from "src/context/AppContex"

export default function Custom404() {
  const { setCtxLayout } = useContext(AppContex)

  useEffect(() => {
    setCtxLayout('error')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>
    <h2>Error 404</h2>
    <p>Page Not Found!</p>
  </>
}
