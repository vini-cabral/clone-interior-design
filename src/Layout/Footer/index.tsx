import styles from './styles.module.sass'

export default function Footer({ children }:{ children: JSX.Element | JSX.Element[] }) {
  return <footer className={ styles['footer'] }>{ children }</footer>
}
