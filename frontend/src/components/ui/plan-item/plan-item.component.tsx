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
  image: FluidObject
  imageStyles: string
  descriptionComponent: string
  descriptionComponentSecond: string
  descriptionComponentThird: string
  descriptionStyles: string
  descriptionWrapper: string
  imageBox: string
  itemHeaderTitleStyles: string
  button: string
  enter: any
  leave: any
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
  image,
  imageStyles,
  descriptionComponent,
  descriptionComponentSecond,
  descriptionComponentThird,
  descriptionStyles,
  descriptionWrapper,
  imageBox,
  itemHeaderTitleStyles,
  button,
  enter,
  leave,
}) => {
  return (
    <div className={itemWrapper} onMouseEnter={enter} onMouseLeave={leave}>
      <div className={itemWrapperHeader}>
        <span className={itemHeaderLogo} />
        <h3 className={itemHeaderTitleStyles}>{upperTitle}</h3>
      </div>
      <h2 className={titleStyles}>{title}</h2>
      <div className={priceWrapper}>
        <p className={priceColored}>{price}</p>
        <p className={priceGrey}>{priceMonth}</p>
      </div>
      <div className={descriptionWrapper}>
        <div className={imageBox}>
          <Img fluid={image} className={imageStyles} />
        </div>
        <p className={descriptionStyles}>{descriptionComponent}</p>
      </div>
      <div className={descriptionWrapper}>
        <div className={imageBox}>
          <Img fluid={image} className={imageStyles} />
        </div>
        <p className={descriptionStyles}>{descriptionComponentSecond}</p>
      </div>
      <div className={descriptionWrapper}>
        <div className={imageBox}>
          <Img fluid={image} className={imageStyles} />
        </div>
        <p className={descriptionStyles}>{descriptionComponentThird}</p>
      </div>
      <SButton variant="hero" className={button}>
        Try free for 30 days
      </SButton>
    </div>
  )
}

export default PlanItem
