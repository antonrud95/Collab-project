import React from 'react'
import { Container } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { useWindowDimensions } from '~/helpers/useWindowDimensions.helper'
import styles from './signup-section.module.scss'

import FadeUpWrapper from '~/components/ui/fade-wrapper/fade-wrapper.component'

const SignupSection = () => {
  const { width } = useWindowDimensions()
  const data = useStaticQuery(graphql`
    query {
      imageTablet: file(relativePath: { eq: "images/signup/tablet.png" }) {
        childImageSharp {
          fluid(maxWidth: 531) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cloud: file(relativePath: { eq: "images/signup/cloud.png" }) {
        childImageSharp {
          fluid(maxWidth: 175) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={styles.signupMainContainer}>
      <div className={styles.mainOrnamentContainer}>
        <span className={styles.whiteDotFirst} />
        <span className={styles.whiteDotSecond} />
        <span className={styles.yellowDot} />
        {width > 1023 && <span className={styles.coloredDots} />}
      </div>
      <Container className={styles.signupInnerContainer}>
        <div className={styles.signupTabletWrapper}>
          <FadeUpWrapper>
            <Img fluid={data.imageTablet.childImageSharp.fluid} />
          </FadeUpWrapper>

          {width > 767 && (
            <FadeUpWrapper>
              <Img
                fluid={data.cloud.childImageSharp.fluid}
                className={styles.cloudLeftStyles}
              />
            </FadeUpWrapper>
          )}
          <FadeUpWrapper>
            <Img
              fluid={data.cloud.childImageSharp.fluid}
              className={styles.cloudStyles}
            />
          </FadeUpWrapper>
        </div>
        <span className={styles.centerOrnament} />
        <span className={styles.centerInnerOrnament} />
        {width > 1023 && <span className={styles.centerOuterOrnament} />}
      </Container>
    </div>
  )
}

export default SignupSection
