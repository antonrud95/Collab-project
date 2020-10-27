import React from 'react'
import { Container } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'

import SimpleSlider from '~/components/ui/features-carousel/features-carousel.component'
import SliderItem from '~/components/ui/features-carousel-item/features-carousel-item.component'
import styles from './features-section.module.scss'

const FeaturesSection = () => {
  const data = useStaticQuery(graphql`
    query {
      imageCamera: file(
        relativePath: { eq: "images/features/features-camera.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 71) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageCalendar: file(
        relativePath: { eq: "images/features/features-calendar.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 62) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <React.Fragment>
      <div className={styles.featuresContainer}>
        <Container>
          <div className={styles.borderOrnament} />
          <SimpleSlider>
            <SliderItem
              image={data.imageCamera.childImageSharp.fluid}
              itemtitle={'Import Photos & Videos'}
              itemtext={
                'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.'
              }
              itemdescription={'Find out more'}
              itemTitleStyles={styles.sliderItemTitle}
              itemTextStyles={styles.sliderItemText}
              itemDescStyles={styles.sliderItemDesc}
              imgWrapper={styles.sliderImageWrapperCamera}
              textWrapper={styles.sliderItemTextWrapper}
            />
            <SliderItem
              image={data.imageCalendar.childImageSharp.fluid}
              itemtitle={'Calendar API Built-In'}
              itemtext={
                'Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.'
              }
              itemdescription={'Find out more'}
              itemTitleStyles={styles.sliderItemTitle}
              itemTextStyles={styles.sliderItemText}
              itemDescStyles={styles.sliderItemDesc}
              imgWrapper={styles.sliderImageWrapperCalendar}
              textWrapper={styles.sliderItemTextWrapper}
            />
            <SliderItem
              image={data.imageCalendar.childImageSharp.fluid}
              itemtitle={'Calendar API Built-In'}
              itemtext={
                'Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.'
              }
              itemdescription={'Find out more'}
              itemTitleStyles={styles.sliderItemTitle}
              itemTextStyles={styles.sliderItemText}
              itemDescStyles={styles.sliderItemDesc}
              imgWrapper={styles.sliderImageWrapperCalendar}
              textWrapper={styles.sliderItemTextWrapper}
            />
          </SimpleSlider>
        </Container>
        <div className={styles.spearOrnament} />
      </div>
      <div className={styles.ornamentContainer} />
    </React.Fragment>
  )
}

export default FeaturesSection
