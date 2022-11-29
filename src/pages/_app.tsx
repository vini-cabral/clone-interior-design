import type { AppProps } from 'next/app'
// My App
import '../styles/settings/css/reset.css'
import '../styles/globals.sass'
import Layout from '../Layout'

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
