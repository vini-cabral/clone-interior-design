import { useState } from "react"
import { IoMenuSharp, IoArrowBackSharp } from "react-icons/io5"
// My App
import styles from './styles.module.sass'

function handleCssStyleName(isClosed:boolean, setIsClosed: Function, setCssStyleName: Function, time = 500) {
  if(isClosed) {
    setIsClosed(!isClosed)
    setCssStyleName(`${ styles['menu'] } ${styles['action--open']} ${styles['transition--open']}`)
    const timerId = setTimeout(() => setCssStyleName(`${ styles['menu'] } ${styles['action--open']}`), time)
    return () => clearTimeout(timerId)
  } else {
    setIsClosed(!isClosed)
    setCssStyleName(`${ styles['menu'] } ${styles['transition--close']}`)
    const timerId = setTimeout(() => setCssStyleName(`${ styles['menu'] }`), time)
    return () => clearTimeout(timerId)
  }
}

export default function Menu() {
  const [isClosed, setIsClosed] = useState(true)
  const [cssStyleName, setCssStyleName] = useState(`${ styles['menu'] }`)

  return <div className={ cssStyleName }>
    <header>
      <span
        className={ styles[isClosed === false ? 'btn-arrow' : 'btn-menu'] }
        onClick={ () => handleCssStyleName(isClosed, setIsClosed, setCssStyleName) }
      >
        <IoMenuSharp />
        <IoArrowBackSharp />
      </span>
      <strong>Interior Design</strong>
    </header>
    <nav>
      <ul>
        <li onClick={ () => handleCssStyleName(false, setIsClosed, setCssStyleName) }>Home</li>
        <li onClick={ () => handleCssStyleName(false, setIsClosed, setCssStyleName) }>Showcase</li>
        <li onClick={ () => handleCssStyleName(false, setIsClosed, setCssStyleName) }>Serviços</li>
        <li onClick={ () => handleCssStyleName(false, setIsClosed, setCssStyleName) }>Designers</li>
        <li onClick={ () => handleCssStyleName(false, setIsClosed, setCssStyleName) }>Pacotes</li>
        <li onClick={ () => handleCssStyleName(false, setIsClosed, setCssStyleName) }>Contato</li>
      </ul>
    </nav>
  </div>
}
