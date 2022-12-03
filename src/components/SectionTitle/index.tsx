import styles from './styles.module.sass'

export default function SectionTitle({ children }:{ children: string }) {
  return <>
    <h3 className={ styles['section-title'] }>{ children }</h3>
    <hr/>
  </>
}
