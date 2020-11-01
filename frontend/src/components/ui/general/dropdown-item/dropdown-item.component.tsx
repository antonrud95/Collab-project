import React from 'react'

import FC from '~/types/fc'
import Img, { FluidObject } from 'gatsby-image'

interface Props {
  componentWrapper: string
  imageWrapper: string
  contentWrapper: string
  title: string
  text: string
  image: FluidObject
  imageStyles: string
  dropdownTitleStyles: string
  dropdownTextStyles: string
}

const DropdownComponent: FC<Props> = ({
  componentWrapper,
  imageWrapper,
  contentWrapper,
  title,
  text,
  image,
  imageStyles,
  dropdownTitleStyles,
  dropdownTextStyles,
}) => {
  return (
    <div className={componentWrapper}>
      <div className={imageWrapper}>
        <Img fluid={image} className={imageStyles} />
      </div>
      <div className={contentWrapper}>
        <h3 className={dropdownTitleStyles}>{title}</h3>
        <p className={dropdownTextStyles}>{text}</p>
      </div>
    </div>
  )
}

export default DropdownComponent
