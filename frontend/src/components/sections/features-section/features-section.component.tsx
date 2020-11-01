import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'

import SimpleSlider from '~/components/ui/features-carousel/features-carousel.component'
import SliderItem from '~/components/ui/features-carousel-item/features-carousel-item.component'
import styles from './features-section.module.scss'

import FadeUpWrapper from '~/components/ui/fade-wrapper/fade-wrapper.component'

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
        <div className={styles.borderOrnament} />
        <div className={styles.spearOrnament} />
        <div className={styles.bigBallOrnament} />
        <Container>
          <Row className={styles.featuresHeader}>
            <Col xs="12" md="3">
              <FadeUpWrapper>
                <h3 className={styles.uppertitle}>Features</h3>
              </FadeUpWrapper>
            </Col>
            <Col xs="12" md="9">
              <div className={styles.mainContent}>
                <FadeUpWrapper>
                  <h2 className={styles.mainContentTitle}>
                    The world’s most powerful design tool.
                  </h2>
                  <p className={styles.mainContentText}>
                    Simultaneously design, code and collaborate with your team
                    all from one place.
                  </p>
                </FadeUpWrapper>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md={{ span: 9, offset: 3 }}>
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
                  cardWrapper={styles.sliderItemCardWrapper}
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
                  cardWrapper={styles.sliderItemCardWrapper}
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
                  cardWrapper={styles.sliderItemCardWrapper}
                />
              </SimpleSlider>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.ornamentContainer} />
    </React.Fragment>
  )
}

export default FeaturesSection
