import styles from './styles.module.sass'

export default function LayoutError({ children }:{ children: JSX.Element | JSX.Element[] }) {
  return <div className={ styles['content'] }>{ children }</div>
}
