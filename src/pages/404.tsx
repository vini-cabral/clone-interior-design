import Head from 'next/head'
import { useEffect } from "react"
import { useContext } from "react"
// My App
import { AppContext } from "src/context"

export default function Custom404() {
  const { setCtxLayout } = useContext(AppContext)

  useEffect(() => {
    setCtxLayout('error')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>
    <Head>
      <title>Interior Design - Página não encontrada</title>
      <meta name="description" content="Página não encontrada" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Erro - 404</h1>
    <p>Página não encontrada.</p>
  </>
}
