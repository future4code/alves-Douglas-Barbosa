import React from 'react'
import BottomHrSvg from '../Assets/HomeHrBar.svg'
import { ContainerHr } from './Styled'

export default function HomeBottomHr() {
  return (
    <ContainerHr>
        <img src={BottomHrSvg}></img>
    </ContainerHr>
  )
}
