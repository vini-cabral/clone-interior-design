import { useContext, useEffect, useState } from "react"
// My App
import { SectionTitle } from "src/components"
import { AppContex } from "src/context"
import { IDataPackages, IPackage } from "src/interfaces"
import { clientGetDataPackage } from "src/services"
import styles from "./styles.module.sass"

interface IItem extends IPackage {
  key: string
}

let keyList: string[] = []
let packageList: IItem[] = []
export default function PackagesCore({ packagesDesc }: {  packagesDesc: any }) {
  const { ctxAppRoutes, ctxDataPackages, setCtxDataPackages } = useContext(AppContex)
  keyList = Object.keys(ctxDataPackages)
  packageList = []
  for(let key of keyList) {
    packageList.push({ ...ctxDataPackages[key as keyof IDataPackages], key })
  }

  useEffect(() => {
    clientGetDataPackage()
    .then(res => setCtxDataPackages(res))
    .catch(err => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>
    <SectionTitle>{ `${ctxAppRoutes.packages.name}.` }</SectionTitle>
    <p>{ packagesDesc && packagesDesc.description }</p>
    <div className={ styles['package-cards'] }>
      {
        packageList.map((el, i) => <div key={ el.key } className={ styles[ i%2 == 0 ? 'package-card-0' : 'package-card-1' ] }>
          <h4>{ el.title ? el.title : 'Indisponível!' }</h4>
          <ul>
            <li>{ el.type ? el.type : 'Indisponível!' }</li>
            <li>{ el.supportTime ? `${el.supportTime}h de suporte` : 'Indisponível!' }</li>
            <li>{ el.auxService ? el.auxService : 'Indisponível!' }</li>
            <li>{ el.discount ? `${el.discount}% de desconte em móveis` : 'Indisponível' }</li>
            <li>{ el.message ? el.message : 'Indisponível!' }</li>
            <li className={styles['price']}>{ el.price ?
              <>
                <span>{`R$ ${el.price.toFixed(2).replace(".", ",")}`}</span>
                <span>por quarto</span>
              </>
              :'Indisponível!'
            }</li>
            <li><button>Contratar</button></li>
          </ul>
        </div>)
      }
    </div>
  </>
}
