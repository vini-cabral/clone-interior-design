import Link from 'next/link'
// My App
import styles from './styles.module.sass'

export default function Footer() {
  return <footer className={ styles['footer'] }>
    <p>
      Desenvolvido por{" "}
      <Link href={ process.env.NEXT_PUBLIC_AUTHOR_URL! } target={"_blank"}>
        <cite>{ process.env.NEXT_PUBLIC_AUTHOR_DESC! }</cite>
      </Link>, veja o repositório:{" "}
      <Link href={ process.env.NEXT_PUBLIC_REPO_URL! } target={"_blank"}>
        <cite>{ process.env.NEXT_PUBLIC_REPO_DESC }</cite>
      </Link>.
    </p>
    <p>
      Projeto base:{" "}
      <Link href={ process.env.NEXT_PUBLIC_REF_PROJECT_URL! } target={"_blank"}>
        <cite>{ process.env.NEXT_PUBLIC_REF_PROJECT_DESC! }</cite>
      </Link>.
    </p>
  </footer>
}
