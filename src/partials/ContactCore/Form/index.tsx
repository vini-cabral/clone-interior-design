import styles from "./styles.module.sass"

export default function Form() {
  return <form className={ styles['form'] }>
    <label>Nome
      <input type="text" id="name" placeholder="Nome" title="Nome" required/>
    </label>
    <label>Email
      <input type="email" id="name" placeholder="cliente@email.com" title="E-mail" required/>
    </label>
    <label>Mensgem
      <textarea id="message" placeholder="Mensagem..." required></textarea>
    </label>
    <button type="submit">Enviar</button>
  </form>
}
