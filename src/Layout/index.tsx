import styles from './styles.module.sass'
import Menu from "./Menu"

export default function Layout({ children }:{ children: JSX.Element | JSX.Element[] }) {
  return <div className={ styles['content'] }>
    <Menu />
    <main>{ children }</main>
    <footer>Footer</footer>
  </div>
}
