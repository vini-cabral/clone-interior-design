import Head from 'next/head'
import { useEffect } from "react"
import { useContext } from "react"
// My App
import { AppContext } from "src/context"
import styles from "../styles/404.module.sass"

export default function Custom404() {
  const { setCtxLayout } = useContext(AppContext)

  useEffect(() => {
    setCtxLayout(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>
    <Head>
      <title>Interior Design - Página não encontrada</title>
      <meta name="description" content="Página não encontrada" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section className={ styles['section'] }>
      <h1>Erro - 404</h1>
      <p>Página não encontrada.</p>
    </section>
  </>
}
