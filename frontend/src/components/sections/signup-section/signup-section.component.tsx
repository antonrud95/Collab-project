import React from 'react'
import { Container } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { useWindowDimensions } from '~/helpers/useWindowDimensions.helper'
import styles from './signup-section.module.scss'

const SignupSection = () => {
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
      </div>
      <Container className={styles.signupInnerContainer}>
        <div className={styles.signupTabletWrapper}>
          <Img fluid={data.imageTablet.childImageSharp.fluid} />
        </div>
        <span className={styles.centerOrnament} />
        <span className={styles.centerInnerOrnament} />
      </Container>
    </div>
  )
}

export default SignupSection
