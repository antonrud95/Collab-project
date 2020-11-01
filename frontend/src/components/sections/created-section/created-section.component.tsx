import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { Container } from 'react-bootstrap'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import styles from './created-section.module.scss'

const CreatedSection = () => {
  const data = useStaticQuery(graphql`
    query {
      item1: file(relativePath: { eq: "images/created/content-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 375) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      item2: file(relativePath: { eq: "images/created/content-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 375) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container fluid className={styles.containerOuter}>
      <Container className={styles.containerInner}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageWrapperUpper}>
            <Img
              fluid={data.item1.childImageSharp.fluid}
              className={styles.imageStyles}
            />
            <Img
              fluid={data.item2.childImageSharp.fluid}
              className={styles.imageStyles}
            />
            <Img
              fluid={data.item1.childImageSharp.fluid}
              className={styles.imageStyles}
            />
            <Img
              fluid={data.item2.childImageSharp.fluid}
              className={styles.imageStyles}
            />
          </div>
          <div className={styles.imageWrapperLower}>
            <Img
              fluid={data.item2.childImageSharp.fluid}
              className={styles.imageStyles}
            />
            <Img
              fluid={data.item1.childImageSharp.fluid}
              className={styles.imageStyles}
            />
            <Img
              fluid={data.item2.childImageSharp.fluid}
              className={styles.imageStyles}
            />
            <Img
              fluid={data.item1.childImageSharp.fluid}
              className={styles.imageStyles}
            />
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default CreatedSection
