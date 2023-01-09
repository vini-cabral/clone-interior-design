import { useRouter } from "next/router"
import { useContext, useState } from "react"
import { IoMenuSharp, IoArrowBackSharp } from "react-icons/io5"
// My App
import { AppContext } from "src/context"
import { IHomePageRoutes } from "src/interfaces"
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
  const { ctxHomePageRoutes, setCtxHomePageRoutes } = useContext(AppContext)
  keyList = Object.keys(ctxHomePageRoutes)
  routeList = Object.values(ctxHomePageRoutes).map((el, i) => { 
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
              ctxHomePageRoutes[el.key as keyof IHomePageRoutes].click = true
              setCtxHomePageRoutes({ ...ctxHomePageRoutes })
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
