import Link from 'next/link'
// My App
import styles from './styles.module.sass'
import {
  PUBLIC_AUTHOR_URL,
  PUBLIC_AUTHOR_DESC,
  PUBLIC_REPO_URL,
  PUBLIC_REPO_DESC,
  PUBLIC_REF_PROJECT_URL,
  PUBLIC_REF_PROJECT_DESC 
} from "src/env"

export default function Footer() {
  return <footer className={ styles['footer'] }>
    <p>
      Desenvolvido por{" "}
      <Link href={ PUBLIC_AUTHOR_URL } target={"_blank"}>
        <cite>{ PUBLIC_AUTHOR_DESC }</cite>
      </Link>, veja o repositório:{" "}
      <Link href={ PUBLIC_REPO_URL } target={"_blank"}>
        <cite>{ PUBLIC_REPO_DESC }</cite>
      </Link>.
    </p>
    <p>
      Projeto base:{" "}
      <Link href={ PUBLIC_REF_PROJECT_URL } target={"_blank"}>
        <cite>{ PUBLIC_REF_PROJECT_DESC }</cite>
      </Link>.
    </p>
  </footer>
}
