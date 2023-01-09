import Head from 'next/head'
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
// My App
import { AppContext } from "src/context"
import styles from "src/styles/contact-feedback.module.sass"

export default function ContactFeedback() {
  const { ctxContactFeedback } = useContext(AppContext)
  const router = useRouter()
  const [title, setTitle] = useState<null | string>(null)
  const [text, setText] = useState<null | string>(null)

  useEffect(() => {
    if(!ctxContactFeedback) {
      router.push("/")
      return
    }
    setTitle(ctxContactFeedback.split("__")[0])
    setText(ctxContactFeedback.split("__")[1])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>
    <Head>
      <title>Interior Design - Feedback</title>
      <meta name="description" content="Feedback" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section className={ styles['feedback'] }>
      {
        title && text && <>
          <h1>{ title }</h1>
          <p>{ text }</p>
          <button onClick={ () => router.push("/") }>Voltar à página inicial</button>
        </>
      }
    </section>
  </>
}
