import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { Container } from 'react-bootstrap'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import SButton from '~/components/ui/general/button/button.component'

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

  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }))

  const STEP = 8
  springsetScrollY({ springscrollY: scrollY })
  const interpHeader = springscrollY.interpolate(
    (o) => `translateX(-${o / STEP}px)`
  )
  const interpHeaderSecond = springscrollY.interpolate(
    (o) => `translateX(${o / STEP}px)`
  )
  return (
    <Container fluid className={styles.containerOuter}>
      <Container className={styles.containerUpper}>
        <h3 className={styles.uppertitle}>Showcase</h3>
        <h2 className={styles.title}>
          Created with
          <br />
          Collab.
        </h2>
        <p className={styles.text}>
          See what designers around the world are
          <br />
          building with Collab.
        </p>
        <SButton variant="hero" className={styles.button}>
          View More Projects
        </SButton>
      </Container>
      <Container className={styles.containerInner}>
        <div className={styles.imageWrapper}>
          <animated.div
            className={styles.scrollableWrapper}
            style={{ transform: interpHeader }}
          >
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
          </animated.div>
          <animated.div
            className={styles.scrollableWrapper}
            style={{ transform: interpHeaderSecond }}
          >
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
          </animated.div>
        </div>
      </Container>
    </Container>
  )
}

export default CreatedSection
