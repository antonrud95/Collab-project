import React, { ReactNode } from 'react'
import FC from '~/types/fc'

interface Props {
  title: string
  description: string
  descriptionComponentWrapper?: string
  upperTitleClassname?: string
  titleClassname?: string
  textClassname?: string
}

const DescriptionComponent: FC<Props> = ({
  title,
  description,
  descriptionComponentWrapper,
  upperTitleClassname,
  titleClassname,
  textClassname,
}) => {
  return (
    <div className={descriptionComponentWrapper}>
      <h2 className={titleClassname}>{title}</h2>
      <p className={textClassname}>{description}</p>
    </div>
  )
}
export default DescriptionComponent
