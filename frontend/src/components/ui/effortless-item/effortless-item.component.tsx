import React from 'react'

import FC from '~/types/fc'
import Img, { FluidObject } from 'gatsby-image'

interface Props {
  itemWrapper: string
  image: FluidObject
  title: string
  text: string
  link: string
  titleStyles: string
  textStyles: string
  linkStyles: string
  imageWrapper: string
}

const EffortlessItem: FC<Props> = ({
  itemWrapper,
  image,
  title,
  text,
  link,
  titleStyles,
  textStyles,
  linkStyles,
  imageWrapper,
}) => {
  return (
    <div className={itemWrapper}>
      <div className={imageWrapper}>
        <Img fluid={image} />
      </div>
      <div>
        <h3 className={titleStyles}>{title}</h3>
        <p className={textStyles}>{text}</p>
        <p className={linkStyles}>{link}</p>
      </div>
    </div>
  )
}

export default EffortlessItem
