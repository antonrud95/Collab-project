import React from 'react'
import FC from '~/types/fc'
import Img, { FluidObject } from 'gatsby-image'

import SButton from '~/components/ui/general/button/button.component'

interface Props {
  itemWrapper: string
  itemWrapperHeader: string
  upperTitle: string
  itemHeaderLogo: string
  title: string
  titleStyles: string
  price: string
  priceMonth: string
  priceWrapper: string
  priceColored: string
  priceGrey: string
  buttonText: string
  image: FluidObject
  imageStyles: string
  descriptionComponent: string
  descriptionStyles: string
  descriptionWrapper: string
}

const PlanItem: FC<Props> = ({
  itemWrapper,
  itemWrapperHeader,
  upperTitle,
  itemHeaderLogo,
  title,
  titleStyles,
  price,
  priceMonth,
  priceWrapper,
  priceColored,
  priceGrey,
  buttonText,
  image,
  imageStyles,
  descriptionComponent,
  descriptionStyles,
  descriptionWrapper,
}) => {
  return (
    <div className={itemWrapper}>
      <div className={itemWrapperHeader}>
        <span className={itemHeaderLogo} />
        {upperTitle}
      </div>
      <h2 className={titleStyles}>{title}</h2>
      <div className={priceWrapper}>
        <p className={priceColored}>{price}</p>
        <p className={priceGrey}>{priceMonth}</p>
      </div>
      <div className={descriptionWrapper}>
        <Img fluid={image} className={imageStyles} />
        <p className={descriptionStyles}>{descriptionComponent}</p>
      </div>
      <SButton variant="hero">{buttonText}</SButton>
    </div>
  )
}

export default PlanItem
