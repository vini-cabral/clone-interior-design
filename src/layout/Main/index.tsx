import styles from './styles.module.sass'

export default function Main({ children }:{ children: JSX.Element | JSX.Element[] }) {
  return <main className={ styles['main'] }>{ children }</main>
}
