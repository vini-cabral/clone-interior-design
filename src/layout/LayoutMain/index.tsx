import { Footer, Main, Menu } from '../partials'

export default function LayoutMain({ children }:{ children: JSX.Element | JSX.Element[] }) {
  return <>
    <>
      <Menu />
      <Main>{ children }</Main>
      <Footer />
    </>
  </>
}
