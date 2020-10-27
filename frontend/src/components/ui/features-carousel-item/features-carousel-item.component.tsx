import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import FC from '~/types/fc'

interface Props {
  imgWrapper?: string
  image: FluidObject
  itemtitle: string
  itemtext: string
  itemdescription: string
  itemTitleStyles?: string
  itemTextStyles?: string
  itemDescStyles?: string
  textWrapper?: string
  cardWrapper: string
}

const SliderItem: FC<Props> = ({
  imgWrapper,
  image,
  itemtitle,
  itemtext,
  itemdescription,
  itemTitleStyles,
  itemTextStyles,
  itemDescStyles,
  textWrapper,
  cardWrapper,
}) => {
  return (
    <div className={cardWrapper}>
      <div className={imgWrapper}>
        <Img fluid={image} />
      </div>
      <h3 className={itemTitleStyles}>{itemtitle}</h3>
      <p className={itemTextStyles}>{itemtext}</p>
      <div className={textWrapper}>
        <p className={itemDescStyles}>{itemdescription}</p>
      </div>
    </div>
  )
}

export default SliderItem
