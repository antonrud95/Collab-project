import React, { ReactNode } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import FC from '~/types/fc'

interface Props {
  children: ReactNode
}

const SimpleSlider: FC<Props> = ({ children }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  return <Slider {...settings}>{children}</Slider>
}

export default SimpleSlider
