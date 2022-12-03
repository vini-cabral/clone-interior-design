import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import { IoMenuSharp, IoArrowBackSharp } from "react-icons/io5"
// My App
import AppContex from "../../context/AppContex"
import styles from './styles.module.sass'

function handleCssStyleName(isClosed:boolean, setIsClosed: Function, setCssStyleName: Function, time = 500) {
  if(isClosed) {
    setIsClosed(!isClosed)
    setCssStyleName(`${ styles['menu'] } ${styles['action--open']} ${styles['transition--open']}`)
    const timerId = setTimeout(() =>setCssStyleName(`${ styles['menu'] } ${styles['action--open']}`), time)
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
  const { ctxHomeLinks, setCtxHomeLinks } = useContext(AppContex)
  const router = useRouter()

  return <div className={ cssStyleName }>
    <header>
      <span
        className={ styles[isClosed === false ? 'btn-arrow' : 'btn-menu'] }
        onClick={ () => handleCssStyleName(isClosed, setIsClosed, setCssStyleName) }
      >
        <IoMenuSharp />
        <IoArrowBackSharp />
      </span>
      <strong onClick={ () => router.push("/") }>Interior Design</strong>
    </header>
    <nav>
      <ul>
        <li onClick={ () => {
            handleCssStyleName(false, setIsClosed, setCssStyleName)
            ctxHomeLinks.home.click = true
            setCtxHomeLinks({ ...ctxHomeLinks })
          } 
        }>
          <Link href={ ctxHomeLinks.home.href }>
            { ctxHomeLinks.home.name }
          </Link>
        </li>
        <li onClick={ () => {
            handleCssStyleName(false, setIsClosed, setCssStyleName)
            ctxHomeLinks.showcase.click = true
            setCtxHomeLinks({ ...ctxHomeLinks })
          } 
        }>
          <Link href={ ctxHomeLinks.showcase.href }>
            { ctxHomeLinks.showcase.name }
          </Link>
        </li>
        <li onClick={ () => {
            handleCssStyleName(false, setIsClosed, setCssStyleName)
            ctxHomeLinks.services.click = true
            setCtxHomeLinks({ ...ctxHomeLinks })
          } 
        }>
          <Link href={ ctxHomeLinks.services.href }>
            { ctxHomeLinks.services.name }
          </Link>
        </li>
        <li onClick={ () => {
            handleCssStyleName(false, setIsClosed, setCssStyleName)
            ctxHomeLinks.designers.click = true
            setCtxHomeLinks({ ...ctxHomeLinks })
          } 
        }>
          <Link href={ ctxHomeLinks.designers.href }>
            { ctxHomeLinks.designers.name }
          </Link>
        </li>
        <li onClick={ () => {
            handleCssStyleName(false, setIsClosed, setCssStyleName)
            ctxHomeLinks.packages.click = true
            setCtxHomeLinks({ ...ctxHomeLinks })
          } 
        }>
          <Link href={ ctxHomeLinks.packages.href }>
            { ctxHomeLinks.packages.name }
          </Link>
        </li>
        <li onClick={ () => {
            handleCssStyleName(false, setIsClosed, setCssStyleName)
            ctxHomeLinks.contact.click = true
            setCtxHomeLinks({ ...ctxHomeLinks })
          } 
        }>
          <Link href={ ctxHomeLinks.contact.href }>
            { ctxHomeLinks.contact.name }
          </Link>
        </li>
      </ul>
    </nav>
  </div>
}
