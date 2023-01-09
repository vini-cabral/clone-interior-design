import { useEffect, useState } from 'react'
// My App
import styles from './styles.module.sass'

function ArrowLt({
  colorBorder = "#333",
  backgroundColor = "#F5F5F5"
}:{
  colorBorder?: string
  backgroundColor?: string
}) {
  return <svg width="35" height="60" viewBox="-12 -12 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke={colorBorder} strokeWidth="12px" fillRule="evenodd" clipRule="evenodd" d="M4.89591 54.3934C-0.961891 60.2512 -0.961935 69.7488 4.89591 75.6066L54.3934 125.104C60.2512 130.962 69.7488 130.962 75.6066 125.104C81.4644 119.246 81.4645 109.749 75.6066 103.891L36.7157 65L75.6066 26.1091C81.4644 20.2513 81.4644 10.7538 75.6066 4.89592C69.7487 -0.961918 60.2512 -0.961875 54.3934 4.89592L4.89591 54.3934Z" fill={backgroundColor}/>
  </svg>
}

function ArrowRt({
  colorBorder = "#333",
  backgroundColor = "#F5F5F5"
}:{
  colorBorder?: string
  backgroundColor?: string
}) {
  return <svg width="35" height="60" transform="rotate(180)" viewBox="-12 -12 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke={colorBorder} strokeWidth="12px" fillRule="evenodd" clipRule="evenodd" d="M4.89591 54.3934C-0.961891 60.2512 -0.961935 69.7488 4.89591 75.6066L54.3934 125.104C60.2512 130.962 69.7488 130.962 75.6066 125.104C81.4644 119.246 81.4645 109.749 75.6066 103.891L36.7157 65L75.6066 26.1091C81.4644 20.2513 81.4644 10.7538 75.6066 4.89592C69.7487 -0.961918 60.2512 -0.961875 54.3934 4.89592L4.89591 54.3934Z" fill={backgroundColor}/>
  </svg>
}

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
function SlideList({
  children, index, btnArrow, btnCaption, autoSliding, time, showBtns, color1, color2, color3
}:{
  children: JSX.Element[]
  index: number
  btnArrow: boolean
  btnCaption: boolean
  autoSliding: boolean
  time:number
  showBtns: boolean
  color1: string
  color2: string
  color3: string
}) {
  indexLastSlide = children.length - 1
  const [indexSlide, setIndexSlide] = useState(0)
  const [listCss, setListCss] = useState([''])

  useEffect(() => {
    setIndexSlide(handleIndex(index, indexLastSlide))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(!autoSliding) {
      return
    }
    const timer = setTimeout(() => handleNext(indexSlide, indexLastSlide, setIndexSlide), time*1000)
    return () => clearTimeout(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexSlide])

  useEffect(() => {
    setListCss(children.map((el, i) => i == indexSlide ? 'slide--show' : 'slide--hide'))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexSlide])

  return <>
    { children.map((el, i) => <div key={ `${el.key}-parent:slide-${i}` } className={ styles[listCss[i]] }>{ el }</div>) }
    { btnArrow && <span className={ styles[showBtns ? 'btn-arrow-lt--show' : 'btn-arrow-lt--hide'] } onClick={ () => handlePrev(indexSlide, indexLastSlide, setIndexSlide) }>
      <ArrowLt colorBorder={ color2 } backgroundColor={ color1 }/>
    </span> }
    { btnArrow && <span className={ styles[showBtns ? 'btn-arrow-rt--show' : 'btn-arrow-rt--hide'] } onClick={ () => handleNext(indexSlide, indexLastSlide, setIndexSlide) }>
      <ArrowRt colorBorder={ color2 } backgroundColor={ color1 }/>
    </span> }
    { btnCaption && <span className={ styles[showBtns ? 'btn-caption--show' : 'btn-caption--hide'] }>
      { 
        children.map((el, i) =><span key={ `${el.key}-parent:btn-caption-${i}` } onClick={() => setIndexSlide(i) }>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="38" fill={ indexSlide == i ? color3 : color1 } strokeWidth="12" stroke={ color2 } />
          </svg>
        </span>) 
      }
    </span> }
  </>
}

let renderSlide: JSX.Element | null = null
let renderSlideList: JSX.Element[] | null = null
let isKeyList = true
export default function Slider({
  children,
  height = '100vh',
  index = 0,
  btnArrow = false,
  btnCaption = false,
  autoSliding = true,
  timeSliding = 12,
  autoHideBtns =true,
  timeHideBtns = 3,
  color1 = '#F5F5F5',
  color2 = '#123',
  color3 = '#ABC',
  handleClose = undefined
}:{
  children: JSX.Element | JSX.Element[]
  height?:string
  index?:number
  btnArrow?:boolean
  btnCaption?:boolean
  autoSliding?:boolean
  timeSliding?:number
  autoHideBtns?: boolean
  timeHideBtns?: number
  color1?: string
  color2?: string
  color3?: string
  handleClose?: Function
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

  const [showBtns, setShowBtns] = useState(true)

  useEffect(() => {
    if(!autoHideBtns) {
      return
    }
    const timer = setTimeout(() => setShowBtns(false), 1000*timeHideBtns)
    return () => clearTimeout(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showBtns])

  return <div className={ styles['slides'] } style={{ height: height }} onMouseMove={ () => setShowBtns(true) }>
    {
      handleClose && 
      <span className={ styles[showBtns ? 'btn-close--show' : 'btn-close--hide'] } onClick={ () => handleClose && handleClose(-1) }>
        <svg width="130" height="130" viewBox="-12 -12 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path strokeWidth='12' stroke={ color2 } fillRule="evenodd" clipRule="evenodd" d="M64.9999 43.7868L26.109 4.89592C20.2511 -0.961961 10.7536 -0.961875 4.89582 4.89592C-0.961976 10.7537 -0.962062 20.2512 4.89582 26.1091L43.7867 65L4.89582 103.891C-0.961976 109.749 -0.962062 119.246 4.89582 125.104C10.7537 130.962 20.2512 130.962 26.109 125.104L64.9999 86.2132L103.891 125.104C109.749 130.962 119.246 130.962 125.104 125.104C130.962 119.246 130.962 109.749 125.104 103.891L86.2131 65L125.104 26.1091C130.962 20.2513 130.962 10.7538 125.104 4.89592C119.246 -0.961918 109.749 -0.961875 103.891 4.89592L64.9999 43.7868Z" fill={ color1 }/>
        </svg>
      </span>
    }
    { renderSlide !== null && <div className={ styles['slide--show'] }>{ renderSlide }</div> }
    {
      renderSlideList !== null
      && isKeyList 
      && <SlideList
        index={ index }
        btnArrow={ btnArrow }
        btnCaption={ btnCaption }
        autoSliding={ autoSliding }
        time={ timeSliding }
        showBtns={ showBtns }
        color1 = { color1 }
        color2 = { color2 }
        color3 = { color3 }
      >
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
