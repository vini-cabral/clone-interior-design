import Head from 'next/head'
import { createClient } from 'next-sanity'
import { useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
// My App
import { sanityConfig, sanityUrlFor } from 'src/lib'
import { Title, ShowcaseCore, ServicesCore, DesignersCore, PackagesCore, ContactCore } from 'src/partials'
import { IProject, IDesigner, IPackage } from 'src/interfaces'
import { AppContext } from 'src/context'
import { utilHandleScroll } from 'src/utils'

// Sanity Data Fetching
const client = createClient(sanityConfig)
export async function getStaticProps() {
  try {
    let error: Error | null = null
    let sanity01Showcase: IProject[] = []
    let sanity02Services: any | null = null
    let sanity03DesignersPart1: any | null = null
    let sanity03DesignersPart2: IDesigner[] = []
    let sanity04PackagePart1: any | null = null
    let sanity04PackagePart2: IPackage[] = []
    let sanity05Contact: any | null = null

    await Promise.all([
      client.fetch(`*[_type == "section01Showcase"] | order(_createdAt asc)`),
      client.fetch(`*[_type == "section02Services"][0]`),
      client.fetch(`*[_type == "section03DesignersPart1"][0]`),
      client.fetch(`*[_type == "section03DesignersPart2"] | order(_createdAt asc)`),
      client.fetch(`*[_type == "section04PackagePart1"][0]`),
      client.fetch(`*[_type == "section04PackagePart2"] | order(_createdAt asc)`),
      client.fetch(`*[_type == "section05Contact"][0]`),
    ])
    .then(([data01Showcase, data02Services, data03DesignersPart1, data03DesignersPart2, data04PackagePart1, data04PackagePart2, data05Contact]) => {
      // Section 01 - Showcase
      sanity01Showcase = data01Showcase.map((el: any) => {
        return {
          createdAt: el._createdAt,
          id: el._id,
          title: el.project,
          thumbnail: {
            src: sanityUrlFor(el.thumbnail).url(),
            alt: el.thumbnail.attribution
          },
          large: {
            src: sanityUrlFor(el.large).url(),
            alt: el.large.attribution
          }
        }
      })
      // Section 02 - Services
      sanity02Services = data02Services
      // Section 03 - Designers
      sanity03DesignersPart1 = data03DesignersPart1
      sanity03DesignersPart2 = data03DesignersPart2.map((el: any) => {
        return {
          createdAt: el._createdAt,
          id: el._id,
          name: el.name,
          position: el.position,
          description: el.description,
          image: {
            src: sanityUrlFor(el.image).url(),
            alt: el.image.attribution
          }
        }
      })
      // Section 04 - Packages
      sanity04PackagePart1 = data04PackagePart1
      sanity04PackagePart2 = data04PackagePart2.map((el: any) => ({ ...el, id: el._id }) )
      // Section 05 - Contact
      sanity05Contact = data05Contact
    })
    .catch(err => error = err)

    if(
      error !== null
      || sanity01Showcase.length == 0
      || sanity02Services === null
      || sanity03DesignersPart1 === null
      || sanity03DesignersPart2.length == 0
      || sanity04PackagePart1 === null
      || sanity04PackagePart2.length == 0
      || sanity05Contact === null
    ) {
      return { notFound: true }
    }
    return {
      props: {
        sanity01Showcase,
        sanity02Services,
        sanity03DesignersPart1,
        sanity03DesignersPart2,
        sanity04PackagePart1,
        sanity04PackagePart2,
        sanity05Contact
      }
    }
  } catch(err) {
    return { notFound: true }
  }
}

let auxOffsetTop = 0
export default function Home({
  sanity01Showcase,
  sanity02Services,
  sanity03DesignersPart1,
  sanity03DesignersPart2,
  sanity04PackagePart1,
  sanity04PackagePart2,
  sanity05Contact
}:{
  sanity01Showcase: IProject[]
  sanity02Services: any | null
  sanity03DesignersPart1: any | null
  sanity03DesignersPart2: IDesigner[]
  sanity04PackagePart1: any | null
  sanity04PackagePart2: IPackage[]
  sanity05Contact: any | null
}) {
  const objRef1 = useRef<HTMLInputElement>(null)
  const objRef2 = useRef<HTMLInputElement>(null)
  const objRef3 = useRef<HTMLInputElement>(null)
  const objRef4 = useRef<HTMLInputElement>(null)
  const objRef5 = useRef<HTMLInputElement>(null)
  const objRef6 = useRef<HTMLInputElement>(null)
  const refList = [objRef1, objRef2, objRef3, objRef4, objRef5, objRef6]
  const { ctxHomePageRoutes, setCtxHomePageRoutes, setCtxLayout } = useContext(AppContext)
  const router = useRouter()
  const [isRead, setIsRead] = useState(false)

  useEffect(() => {
    setCtxLayout('main')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(isRead) {
      return
    }
    if(!isRead && router.asPath == '/') {
      setIsRead(true)
    }
    Object.values(ctxHomePageRoutes).filter((el, i) => {
      auxOffsetTop = refList[i].current!.offsetTop
      if(!isRead && router.asPath == el.href && typeof auxOffsetTop == 'number') {
        setIsRead(true)
        el.click = false
        setCtxHomePageRoutes({ ...ctxHomePageRoutes })
        utilHandleScroll(auxOffsetTop, false)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  useEffect(() => {
    Object.values(ctxHomePageRoutes).filter((el, i) => {
      auxOffsetTop = refList[i].current!.offsetTop
      if(isRead && el.click && typeof auxOffsetTop == 'number') {
        el.click = false
        setCtxHomePageRoutes({ ...ctxHomePageRoutes })
        utilHandleScroll(auxOffsetTop)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctxHomePageRoutes])

  return <>
    <Head>
      <title>Interior Design - Página Inicial</title>
      <meta name="description" content="Serviços de design de interiores" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div ref={ objRef1 }>
      <Title />
    </div>
    <section ref={ objRef2 }>
      <ShowcaseCore showcase={ sanity01Showcase } />
    </section>
    <section  ref={ objRef3 }>
      <ServicesCore services={ sanity02Services } />
    </section>
    <section ref={ objRef4 }>
      <DesignersCore designersPart1={ sanity03DesignersPart1 } designersPart2={ sanity03DesignersPart2 } />
    </section>
    <section ref={ objRef5 }>
      <PackagesCore packagePart1={ sanity04PackagePart1 } packagePart2={ sanity04PackagePart2 } />
    </section>
    <section ref={ objRef6 }>
      <ContactCore contactDesc={ sanity05Contact } />
    </section>
  </>
}
