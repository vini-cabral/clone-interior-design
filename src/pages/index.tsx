import Head from 'next/head'
import { createClient } from 'next-sanity'
import { useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
// My App
import { sanityConfig, sanityUrlFor } from 'src/lib'
import { Title, ShowcaseCore, ServicesCore, DesignersCore, PackagesCore, ContactCore } from 'src/partials'
import { IProject, ITeammate } from 'src/interfaces'
import { AppContex } from 'src/context'
import { utilHandleScroll } from 'src/utils'

// Sanity Data Fetching
const client = createClient(sanityConfig)
export async function getStaticProps() {
  try {
    let error: Error | null = null
    let sanityShowcase: IProject[] = []
    let sanityServicesDesc: any | null = null
    let sanityDesignersDesc: any | null = null
    let sanityTeam: ITeammate[] = []
    let sanityPackagesDesc: any | null = null
    let sanityContactDesc: any | null = null

    await Promise.all([
      client.fetch(`*[_type == "showcase"] | order(_createdAt asc)`),
      client.fetch(`*[_type == "services"][0]`),
      client.fetch(`*[_type == "designers"][0]`),
      client.fetch(`*[_type == "teammate"] | order(_createdAt asc)`),
      client.fetch(`*[_type == "package"][0]`),
      client.fetch(`*[_type == "contact"][0]`),
    ])
    .then(([dataShowcase, dataServices, dataDesigners, dataTeam, dataPackagesDesc, dataContactDesc]) => {
      // Showcae
      sanityShowcase = dataShowcase.map((el: any) => {
        return {
          createdAt: el._createdAt,
          id: el._id,
          title: el.title,
          thumbnail: {
            src: sanityUrlFor(el.thumbnail).url(),
            alt: el.thumbnail.caption
          },
          large: {
            src: sanityUrlFor(el.large).url(),
            alt: el.large.caption
          }
        }
      })
      // Services
      sanityServicesDesc = dataServices
      // Designers
      sanityDesignersDesc = dataDesigners
      // Team
      sanityTeam = dataTeam.map((el: any) => {
        return {
          createdAt: el._createdAt,
          id: el._id,
          name: el.name,
          position: el.position,
          description: el.description,
          image: {
            src: sanityUrlFor(el.image).url(),
            alt: el.image.caption
          }
        }
      })
      // Packages
      sanityPackagesDesc = dataPackagesDesc
      // Contact
      sanityContactDesc = dataContactDesc
    })
    .catch(err => error = err)

    if(
      error !== null
      || sanityShowcase.length == 0
      || sanityServicesDesc === null
      || sanityDesignersDesc === null
      || sanityTeam.length == 0
      || sanityPackagesDesc === null
      || sanityContactDesc === null
    ) {
      return { notFound: true }
    }
    return {
      props: {
        sanityShowcase,
        sanityServicesDesc,
        sanityDesignersDesc,
        sanityTeam,
        sanityPackagesDesc,
        sanityContactDesc
      },
      revalidate: 10800, // 3h
    }
  } catch(err) {
    return { notFound: true }
  }
}

let auxOffsetTop = 0
export default function Home({ 
  sanityShowcase, sanityServicesDesc, sanityDesignersDesc, sanityTeam, sanityPackagesDesc, sanityContactDesc
}:{
  sanityShowcase: IProject[],
  sanityServicesDesc: any | null,
  sanityDesignersDesc: any | null,
  sanityTeam: ITeammate[],
  sanityPackagesDesc: any | null,
  sanityContactDesc: any | null
}) {
  const objRef1 = useRef<HTMLInputElement>(null)
  const objRef2 = useRef<HTMLInputElement>(null)
  const objRef3 = useRef<HTMLInputElement>(null)
  const objRef4 = useRef<HTMLInputElement>(null)
  const objRef5 = useRef<HTMLInputElement>(null)
  const objRef6 = useRef<HTMLInputElement>(null)
  const refList = [objRef1, objRef2, objRef3, objRef4, objRef5, objRef6]
  const { ctxHomePageRoutes, setCtxHomePageRoutes, setCtxLayout } = useContext(AppContex)
  const router = useRouter()
  const [isRead, setIsRead] = useState(false)

  useEffect(() => {
    setCtxLayout('std')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(isRead) {
      return
    }
    if(!isRead && router.asPath == '/') {
      setIsRead(true)
    }
    const idCounter = setTimeout(() => {
      Object.values(ctxHomePageRoutes).filter((el, i) => {
        auxOffsetTop = refList[i].current!.offsetTop
        if(!isRead && router.asPath == el.href && typeof auxOffsetTop == 'number') {
          setIsRead(true)
          el.click = false
          setCtxHomePageRoutes({ ...ctxHomePageRoutes })
          utilHandleScroll(auxOffsetTop, false)
        }
      })
    }, 300)
    return () => clearTimeout(idCounter)
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
      <title>Interior Design</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div ref={ objRef1 }>
      <Title />
    </div>
    <section ref={ objRef2 }>
      <ShowcaseCore showcase={ sanityShowcase } />
    </section>
    <section  ref={ objRef3 }>
      <ServicesCore servicesDesc={ sanityServicesDesc } />
    </section>
    <section ref={ objRef4 }>
      <DesignersCore designersDesc={ sanityDesignersDesc } team={ sanityTeam } />
    </section>
    <section ref={ objRef5 }>
      <PackagesCore packagesDesc={ sanityPackagesDesc } />
    </section>
    <section ref={ objRef6 }>
      <ContactCore contactDesc={ sanityContactDesc } />
    </section>
  </>
}
