import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import styles from './effortless-section.module.scss'

import EffortlessItem from '~/components/ui/effortless-item/effortless-item.component'

import FC from '~/types/fc'
import { useWindowDimensions } from '~/helpers/useWindowDimensions.helper'
import { EffortlessType } from '~/types/effortless.type'

interface Props {
  effortlesses: EffortlessType[]
}

const EffortlessSection: FC<Props> = ({ effortlesses }) => {
  const { width } = useWindowDimensions()
  const data = useStaticQuery(graphql`
    query {
      lamp: file(relativePath: { eq: "images/efforts/lamp.png" }) {
        childImageSharp {
          fluid(maxWidth: 274) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Row className={styles.effortsRow}>
        <Col xs="12" md="8" className={styles.effortsContent}>
          <h3 className={styles.effortsUppertitle}>Effortless</h3>
          <h2 className={styles.effortsTitle}>
            Go from ideation to
            <br />
            design and done.
          </h2>
          <p className={styles.effortsText}>
            Easily create truly responsive components
            <br />
            while deploying production-ready code.
          </p>
        </Col>
        <Col>
          <span className={styles.ornamentFirst} />
          <span className={styles.ornamentSecond} />
          {width > 767 && (
            <div className={styles.effortsImage}>
              <Img fluid={data.lamp.childImageSharp.fluid} />
            </div>
          )}
        </Col>
      </Row>
      <div className={styles.effortlessesWrapper}>
        {effortlesses.map((effort: EffortlessType, index) => {
          return (
            <EffortlessItem
              key={effort.id}
              itemWrapper={styles.itemWrapper}
              image={effort.image.childImageSharp.fluid}
              title={effort.title}
              text={effort.text}
              link={effort.link}
              titleStyles={styles.titleStyles}
              textStyles={styles.textStyles}
              linkStyles={styles.linkStyles}
              imageWrapper={styles.imageWrapper}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default EffortlessSection
