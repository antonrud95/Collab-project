import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SButton from '~/components/ui/general/button/button.component'
import SInput from '~/components/ui/general/input/input.component'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import styles from './advantages-section.module.scss'

const AdvantagesSection = () => {
  const data = useStaticQuery(graphql`
    query {
      imageFirst: file(
        relativePath: { eq: "icons/advantages/icon-first.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 56) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageSecond: file(
        relativePath: { eq: "icons/advantages/icon-second.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 56) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThird: file(
        relativePath: { eq: "icons/advantages/icon-third.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 56) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={styles.advantagesOuter}>
      <Container>
        <div className={styles.signupSectionForm}>
          <h3 className={styles.signupSectionTitle}>
            Ready to get started?{<br />}Sign up with your email
          </h3>
          <div className={styles.inputFormStyles}>
            <SInput />
            <SButton variant="hero" className={styles.advantagesButton}>
              Get started
            </SButton>
          </div>
        </div>
      </Container>
      <Container className={styles.advantagesContent}>
        <Row>
          <Col xs="12" md="6">
            <h3 className={styles.advantagesTitle}>Auto Adaptive layouts</h3>
            <p className={styles.advantagesText}>Responsive{<br />}DNA.</p>
            <p className={styles.advantagesDescription}>
              Easily create truly responsive components while deploying
              production-ready code.
            </p>
            <div className={styles.iconWrapper}>
              <div className={styles.iconStylesWrapper}>
                <Img fluid={data.imageFirst.childImageSharp.fluid} />
              </div>
              <p className={styles.iconWrapperText}>Advanced pinning</p>
            </div>
            <div className={styles.iconWrapper}>
              <div className={styles.iconStylesWrapper}>
                <Img fluid={data.imageFirst.childImageSharp.fluid} />
              </div>
              <p className={styles.iconWrapperText}>
                Relative positioning with containers
              </p>
            </div>
            <div className={styles.iconWrapper}>
              <div className={styles.iconStylesWrapper}>
                <Img fluid={data.imageFirst.childImageSharp.fluid} />
              </div>
              <p className={styles.iconWrapperText}>
                Percentage-based geometry
              </p>
            </div>
          </Col>
          <Col xs="12" md="6">
            Hello
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AdvantagesSection
