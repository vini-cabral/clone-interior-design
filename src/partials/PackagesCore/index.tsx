import { useRouter } from "next/router"
import { useContext } from "react"
// My App
import { SectionTitle } from "src/components"
import { AppContext } from "src/context"
import { IPackage } from "src/interfaces"
import styles from "./styles.module.sass"


export default function PackagesCore({ packagePart1, packagePart2 }: {  packagePart1: any, packagePart2: IPackage[] }) {
  const { ctxHomePageRoutes, setCtxHomePageRoutes } = useContext(AppContext)
  const router = useRouter()

  return <>
    <SectionTitle>{ `${ctxHomePageRoutes.packages.name}.` }</SectionTitle>
    <p>{ packagePart1 && packagePart1.description }</p>
    <div className={ styles['package-cards'] }>
      {
        packagePart2.map((el:IPackage, i) => <div key={ el.id } className={ styles[ i%2 == 0 ? 'package-card-0' : 'package-card-1' ] }>
          <h4>{ el.package }</h4>
          <ul>
            <li>{ el.type }</li>
            <li>{ el.supportTime > 1 ? `${el.supportTime} Horas` : `${el.supportTime} Hora` }</li>
            <li>{ el.auxService }</li>
            { el.discount > 0 && <li>{ `Desconto de ${el.discount}%` }</li>}
            <li>{ el.message }</li>
            <li className={styles['price']}>
              <span>{`R$ ${el.price.toFixed(2).replace(".", ",")}`}</span>
              <span>por quarto</span>
            </li>
            <li>
              <button onClick={ () => {
                  ctxHomePageRoutes['contact'].click = true
                  setCtxHomePageRoutes({ ...ctxHomePageRoutes })
                  router.push(ctxHomePageRoutes['contact'].href)
                } 
              }>Contratar</button></li>
          </ul>
        </div>)
      }
    </div>
  </>
}
