import { useEffect, useState } from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
// My App
import styles from './styles.module.sass'

const handleIndex = (i: number, j: number):number => {
  if(i < 0)
    return j
  if(i > j)
    return 0
  return i
}
const handlePrev = (i: number, j: number, setIndexSlide: Function): void => setIndexSlide(handleIndex(i - 1, j))
const handleNext = (i: number, j: number, setIndexSlide: Function): void => setIndexSlide(handleIndex(i + 1, j))

let indexLastSlide = 0
let indexSlideAux = 0
function SlideList({
  children, index, btnArrow, btnCaption, autoSliding, time
}:{
  children: JSX.Element[], index: number, btnArrow: boolean, btnCaption: boolean, autoSliding: boolean, time:number
}) {
  indexLastSlide = children.length - 1
  const [indexSlide, setIndexSlide] = useState(0)
  const [listCss, setListCss] = useState([''])

  useEffect(() => {
    if(indexLastSlide >= 0) {
      indexSlideAux = handleIndex(index, indexLastSlide)
      setIndexSlide(indexSlideAux)
      setListCss(children.map((el, i) => i == indexSlideAux ? 'slide--show' : 'slide--hide'))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, index])

  useEffect(() => {
    if(!autoSliding) {
      return
    }
    const timer = setInterval(() => handleNext(indexSlide, indexLastSlide, setIndexSlide), time*1000)
    return () => clearInterval(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexSlide])

  useEffect(() => {
    setListCss(children.map((el, i) => i == indexSlide ? 'slide--show' : 'slide--hide'))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexSlide])

  return <>
    { children.map((el, i) => <div key={ `${el.key}-parent:slide-${i}` } className={ styles[listCss[i]] }>{ el }</div>) }
    { btnArrow && <span className={ styles['btn-arrow-lt'] } onClick={ () => handlePrev(indexSlide, indexLastSlide, setIndexSlide) }>
      <IoChevronBackOutline />
    </span> }
    { btnArrow && <span className={ styles['btn-arrow-rt'] } onClick={ () => handleNext(indexSlide, indexLastSlide, setIndexSlide) }>
      <IoChevronForwardOutline />
    </span> }
    { btnCaption && <div className={ styles['btn-caption'] }>
      { children.map((el, i) => <button
        key={ `${el.key}-parent:btn-caption-${i}` }
        onClick={() => setIndexSlide(i) }
        className={ indexSlide == i ? styles['btn--active'] :  styles['btn'] }
      />) }
    </div> }
  </>
}

let renderSlide: JSX.Element | null = null
let renderSlideList: JSX.Element[] | null = null
let isKeyList = true
export default function Slider({
  children, height = '100vh', index = 0, btnArrow = false, btnCaption = false, autoSliding = true, time = 12
}:{
  children: JSX.Element | JSX.Element[], height?:string, index?:number, btnArrow?:boolean, btnCaption?:boolean, autoSliding?:boolean, time?:number
}) {

  if(!Array.isArray(children)) {
    renderSlide = children
  } else if(children.length == 1) {
    renderSlide = children[0]
  } else {
    children.forEach((el, i, list) => {
      if(typeof el.key != 'string') {
        isKeyList = false
      }
      if(i > 0 && list[0].key == el.key) {
        isKeyList = false
      }
    })
    renderSlideList = children
  }

  return <div className={ styles['slides'] } style={{ height: height }}>
    { renderSlide !== null && <div className={ styles['slide--show'] }>{ renderSlide }</div> }
    {
      renderSlideList !== null
      && isKeyList 
      && <SlideList index={ index } btnArrow={ btnArrow } btnCaption={ btnCaption } autoSliding={ autoSliding } time={ time }>
        { renderSlideList }
      </SlideList> 
    }
    {
      !isKeyList && <div className={ styles['slide--show'] }>
        <div className={ styles['error'] }>
          <h3>Error!</h3>
          <p>Each element (slide) of the Carousel must have a unique Key of type string!</p>
        </div>
      </div>
    }
  </div>
}
