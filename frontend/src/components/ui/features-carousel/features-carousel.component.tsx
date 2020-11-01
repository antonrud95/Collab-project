import React, { ReactNode } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useWindowDimensions } from '~/helpers/useWindowDimensions.helper'

import FC from '~/types/fc'

interface Props {
  children: ReactNode
}

const SimpleSlider: FC<Props> = ({ children }) => {
  const { width } = useWindowDimensions()
  const widthVariable = () => {
    switch (true) {
      case width > 575:
        return 2
      default:
        return 1
    }
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: widthVariable(),
    slidesToScroll: 1,
    pauseOnHover: false,
  }
  return <Slider {...settings}>{children}</Slider>
}

export default SimpleSlider
