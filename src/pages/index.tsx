import Head from 'next/head'
import { createClient } from 'next-sanity'
// My App
import { config, urlFor } from '../lib/sanity'
import { Section } from '../components'
import { Showcase, Title } from '../partials'
import { IShowcase } from '../interfaces'
// Mock
import { mockShowcase } from '../mock'

// Sanity Data Fetching
const client = createClient(config)
export async function getStaticProps() {
  try {
    let error: Error | null = null
    let sanityShowcase: IShowcase[] = []
  
    await Promise.all([
      client.fetch(`*[_type == "showcase"] | order(_createdAt asc)`),
    ])
    .then(([dataHeroCarousel]) => {
      // Hero's Carousel
      sanityShowcase = dataHeroCarousel.map((el: any) => {
        return {
          createdAt: el._createdAt,
          id: el._id,
          title: el.title,
          thumbnail: {
            src: urlFor(el.thumbnail).url(),
            alt: el.thumbnail.caption
          },
          large: {
            src: urlFor(el.large).url(),
            alt: el.large.caption
          }
        }
      })
    })
    .catch(err => error = err)

    if(
      error !== null
      || sanityShowcase.length == 0
    ) {
      return { notFound: true }
    }
    return {
      props: {
        sanityShowcase,
      },
    }
  } catch(err) {
    return { notFound: true }
  }
}

export default function Home({ sanityShowcase }:{ sanityShowcase: IShowcase[] }) {
  return (
    <>
      <Head>
        <title>Interior Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title />
      <Section>
        <Showcase showcase={ sanityShowcase } />
      </Section>
    </>
  )
}
