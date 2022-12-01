import styles from './styles.module.sass'

export default function Section({ children }:{ children: JSX.Element | JSX.Element[] }) {
  return <section className={ styles['section'] }>
    { children }
  </section>
}
