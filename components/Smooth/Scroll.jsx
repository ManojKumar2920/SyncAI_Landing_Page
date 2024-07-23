'use client'
import { ReactLenis } from 'lenis/react'

function Scroll({children}) {

  return (
    <ReactLenis root options={{lerp:0.08, smoothTouch:true}} >
      { children }
    </ReactLenis>
  )
}

export default Scroll;