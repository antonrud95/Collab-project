import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import SButton from '~/components/ui/general/button/button.component'

import { useWindowDimensions } from '~/helpers/useWindowDimensions.helper'
import FadeUpWrapper from '~/components/ui/fade-wrapper/fade-wrapper.component'

import styles from './prototying-section.module.scss'

const PrototyingSection = () => {
  const { width } = useWindowDimensions()
  const data = useStaticQuery(graphql`
    query {
      thumbUp: file(relativePath: { eq: "images/prototying/thumbs-up.png" }) {
        childImageSharp {
          fluid(maxWidth: 518) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Container fluid className={styles.containerOuter}>
        {width < 1441 && (
          <div className={styles.protoImageWrapper}>
            <FadeUpWrapper>
              <Img
                fluid={data.thumbUp.childImageSharp.fluid}
                className={styles.handImage}
              />
            </FadeUpWrapper>
            <span className={styles.ornamentFirst} />
            <span className={styles.ornamentSecond} />
            <span className={styles.ornamentThird} />
            <span className={styles.ornamentFourth} />
          </div>
        )}
        <div className={styles.containerInner}>
          <div className={styles.bgContainer}>
            <div className={styles.bgContainerContent}>
              <h2 className={styles.bgContainerContentTitle}>
                Native-like Prototying
                <span className={styles.spanDot} />
              </h2>
              <p className={styles.bgContainerContentText}>
                With Collab Smart Prototype you create your interactions and
                animations once and store as presets in the cloud for future
                use.{<br />}
                {<br />}Use the Collab App to test in real-time.
              </p>
              <SButton variant="primary" className={styles.protoBtnStyles}>
                See Sample Prototype
              </SButton>
            </div>
            {width > 1440 && (
              <div className={styles.protoImageWrapper}>
                <FadeUpWrapper>
                  <Img
                    fluid={data.thumbUp.childImageSharp.fluid}
                    className={styles.handImage}
                  />
                </FadeUpWrapper>
                <span className={styles.ornamentFirst} />
                <span className={styles.ornamentSecond} />
                <span className={styles.ornamentThird} />
                <span className={styles.ornamentFourth} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PrototyingSection
