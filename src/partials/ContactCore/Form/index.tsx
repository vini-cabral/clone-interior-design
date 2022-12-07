import { NextRouter, useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
// My App
import styles from "./styles.module.sass"
import { AppContex } from "src/context"

function handleSendMessage(
  evt: React.FormEvent<HTMLFormElement>,
  name: string,
  email: string,
  message: string,
  setIsWrongName: Function,
  setIsWrongEmail: Function,
  setIsWrongMessage: Function,
  setCtxContactFeedback: Function,
  router: NextRouter,
) {
  evt.preventDefault()

  name = name.trim()
  email = email.trim()
  message = message.trim()

  if(name.length < 3) {
    return setIsWrongName(true)
  }

  if(email.search('@') < 0 || email.length < 3) {
    return setIsWrongEmail(true)
  }

  if(message.length < 3) {
    return setIsWrongMessage(true)
  }

  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sendMessage`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      message
    })
  })
  .then(res => res.json())
  .then(obj => {
    setCtxContactFeedback(`Parabéns__${obj.data}`)
    router.push("/contact-feedback")
  })
  .catch(() => {
    setCtxContactFeedback("Ops...__Algo deu errado, tente mais tarde :(")
    router.push("/contact-feedback")
  })
}

export default function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isWrongName, setIsWrongName] = useState(false)
  const [isWrongEmail, setIsWrongEmail] = useState(false)
  const [isWrongMessage, setIsWrongMessage] = useState(false)
  const { setCtxContactFeedback, ctxHomePageRoutes, setCtxHomePageRoutes } = useContext(AppContex)
  const router = useRouter()

  useEffect(() => {
    setCtxContactFeedback(null)
    if (!String.prototype.trim) {
      String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <form
      className={ styles['form'] }
      onSubmit={ evt => handleSendMessage(
        evt, name, email, message, setIsWrongName, setIsWrongEmail, setIsWrongMessage, setCtxContactFeedback, router
      ) }
    >
    <label className={ styles[isWrongName ? 'field--error' : ''] }>
      { isWrongName ? <span>O campo <span>nome</span> é obrigatório</span> : "Nome" }
      <input
        type="text"
        id="name"
        placeholder="Nome" 
        title="Nome"
        onChange={ evt => setName(evt.currentTarget.value) }
        onFocus={ () => setIsWrongName(false) }
        maxLength={ 45 }
      />
    </label>
    <label className={ styles[isWrongEmail ? 'field--error' : ''] }>
      { isWrongEmail ? <span>O campo <span>email</span> é obrigatório (Utilize um endereço válido)</span> : "Email" }
      <input
        type="text"
        id="name"
        placeholder="cliente@email.com"
        title="E-mail"
        onChange={ evt => setEmail(evt.currentTarget.value) }
        onFocus={ () => setIsWrongEmail(false) }
        maxLength={ 45 }
      />
    </label>
    <label className={ styles[isWrongMessage ? 'field--error' : ''] }>
      { isWrongMessage ? <span>O campo <span>mensagem</span> é obrigatório</span> : "Mensagem" }
      <textarea
        id="message"
        placeholder="Mensagem..."
        onChange={ evt => setMessage(evt.currentTarget.value) }
        onFocus={ () => setIsWrongMessage(false) }
        maxLength={ 500 }
      ></textarea>
    </label>
    <button type="submit">Enviar</button>
  </form>
}
