import { useRouter } from "next/router"
import { useContext, useState } from "react"
import { IoMenuSharp, IoArrowBackSharp } from "react-icons/io5"
// My App
import { AppContex } from "src/context"
import { IAppRoutes } from "src/interfaces"
import { TLink } from "src/types"
import styles from "./styles.module.sass"

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

interface IItem extends TLink {
  key: string
}

let keyList: string[] = []
let routeList: IItem[] = []
export default function Menu() {
  const [isClosed, setIsClosed] = useState(true)
  const [cssStyleName, setCssStyleName] = useState(`${ styles['menu'] }`)
  const { ctxAppRoutes, setCtxAppRoutes } = useContext(AppContex)
  keyList = Object.keys(ctxAppRoutes)
  routeList = Object.values(ctxAppRoutes).map((el, i) => { 
    return { ... el, key: keyList[i] }
  })
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
        {
          routeList.map(el => <li
            key={ el.key }
            onClick = { () => {
              handleCssStyleName(false, setIsClosed, setCssStyleName)
              ctxAppRoutes[el.key as keyof IAppRoutes].click = true
              setCtxAppRoutes({ ...ctxAppRoutes })
              router.push(el.href)
            }}
          >
            { el.name }
          </li>)
        }
      </ul>
    </nav>
  </div>
}
