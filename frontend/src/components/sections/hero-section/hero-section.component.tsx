import React from 'react'
import { Container } from 'react-bootstrap'
import DescriptionComponent from '~/components/ui/general/description/description.component'
import FC from '~/types/fc'
import { HeroType } from '~/types/hero.type'
import SButton from '~/components/ui/general/button/button.component'
import WorkIcon from '~/assets/icons/hero/work-icon.svg'
import ScrollIcon from '~/assets/icons/hero/scroll-icon.svg'
import { useWindowDimensions } from '~/helpers/useWindowDimensions.helper'

import styles from './hero-section.module.scss'
import Img from 'gatsby-image'

interface Props {
  heroes: HeroType[]
}

const HeroSection: FC<Props> = ({ heroes }) => {
  const { width } = useWindowDimensions()
  return (
    <Container fluid className={styles.containerOuter}>
      <Container className={styles.heroContainer}>
        <div className={styles.heroBlock}>
          <div className={styles.heroContent}>
            <DescriptionComponent
              key={heroes[0].id}
              title={heroes[0].title}
              description={heroes[0].subtitle}
              descriptionComponentWrapper={styles.descriptionComponent}
              titleClassname={styles.descriptionTitle}
              textClassname={styles.descriptionText}
            />
            {width > 1023 && (
              <div className={styles.imageWrapper}>
                <Img
                  fluid={heroes[0].image.childImageSharp.fluid}
                  className={styles.headerImg}
                />
              </div>
            )}
          </div>

          <div className={styles.buttonWrapper}>
            <SButton variant="primary" className={styles.firstBtn}>
              Get started
            </SButton>
            <SButton variant="secondary">
              <WorkIcon />
              {width > 1023 && (
                <p className={styles.secondaryWorkBtn}>See it in action</p>
              )}
            </SButton>
          </div>
          <div className={styles.swipeWrapper}>
            <ScrollIcon />
            {width < 768 && (
              <p className={styles.swipeText}>Swipe to explore</p>
            )}
            {width > 767 && (
              <p className={styles.swipeText}>Scroll to explore</p>
            )}
          </div>
          {width < 1024 && (
            <div className={styles.imageWrapper}>
              <Img
                fluid={heroes[0].image.childImageSharp.fluid}
                className={styles.headerImg}
              />
            </div>
          )}
        </div>
      </Container>
    </Container>
  )
}
export default HeroSection
