import React from 'react'
import { Container } from 'react-bootstrap'
import DescriptionComponent from '~/components/ui/general/description/description.component'
import FC from '~/types/fc'
import { HeroType } from '~/types/hero.type'

import styles from './hero-section.module.scss'
import Img from 'gatsby-image'

interface Props {
  heroes: HeroType[]
}

const HeroSection: FC<Props> = ({ heroes }) => {
  return (
    <Container>
      <div className={styles.heroBlock}>
        <DescriptionComponent
          key={heroes[0].id}
          title={heroes[0].title}
          description={heroes[0].subtitle}
          descriptionComponentWrapper={styles.descriptionComponent}
          titleClassname={styles.descriptionTitle}
          textClassname={styles.descriptionText}
        />
        <div className={styles.imageWrapper}>
          <Img
            fluid={heroes[0].image.childImageSharp.fluid}
            className={styles.headerImg}
          />
        </div>
      </div>
    </Container>
  )
}
export default HeroSection
