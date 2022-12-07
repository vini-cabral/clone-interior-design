import { useRouter } from "next/router"
import { useEffect } from "react"
import { useContext } from "react"
// My App
import { AppContex } from "src/context"

export default function Custom404() {
  const { setCtxLayout } = useContext(AppContex)
  const router = useRouter()

  useEffect(() => {
    setCtxLayout('error')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>
    <h1>Erro - 404</h1>
    <p>Página não encontrada.</p>
  </>
}
