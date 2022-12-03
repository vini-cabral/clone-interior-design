import Link from 'next/link'
// My App
import {
  ENV_PUBLIC_REF_PROJECT_DESC,
  ENV_PUBLIC_REF_PROJECT_URL,
  ENV_PUBLIC_REPO_AUTHOR_DESC,
  ENV_PUBLIC_REPO_AUTHOR_URL,
  ENV_PUBLIC_REPO_DESC,
  ENV_PUBLIC_REPO_URL
} from '../../env'
import styles from './styles.module.sass'

export default function Footer() {
  return <footer className={ styles['footer'] }>
    <p>
      Desenvolvido por{" "}
      <Link href={ ENV_PUBLIC_REPO_AUTHOR_URL } target={"_blank"}>
        <cite>{ ENV_PUBLIC_REPO_AUTHOR_DESC }</cite>
      </Link>, veja o repositório:{" "}
      <Link href={ ENV_PUBLIC_REPO_URL } target={"_blank"}>
        <cite>{ ENV_PUBLIC_REPO_DESC }</cite>
      </Link>.
    </p>
    <p>
      Projeto base:{" "}
      <Link href={ ENV_PUBLIC_REF_PROJECT_URL } target={"_blank"}>
        <cite>{ ENV_PUBLIC_REF_PROJECT_DESC }</cite>
      </Link>.
    </p>
  </footer>
}
