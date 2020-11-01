import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SButton from '~/components/ui/general/button/button.component'
import SInput from '~/components/ui/general/input/input.component'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import SendingMailLogo from '~/assets/icons/advantages/sending-mail.svg'
import IconFirst from '~/assets/icons/advantages/icon-first.svg'
import IconSecond from '~/assets/icons/advantages/icon-second.svg'
import IconThird from '~/assets/icons/advantages/icon-third.svg'

import { useWindowDimensions } from '~/helpers/useWindowDimensions.helper'

import styles from './advantages-section.module.scss'

const AdvantagesSection = () => {
  const { width } = useWindowDimensions()
  const data = useStaticQuery(graphql`
    query {
      advantagesPhone: file(
        relativePath: { eq: "images/advantages/advantages-phone.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 595) {
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
            <SInput
              type={'text'}
              children={<SendingMailLogo className={styles.inputLogoStyles} />}
              placeholder={'Email address'}
              inputWrapper={styles.inputWrapper}
              inputStyles={styles.inputStyles}
            />
            <SButton variant="hero" className={styles.advantagesButton}>
              Get started
            </SButton>
          </div>
        </div>
      </Container>
      <Container fluid className={styles.mainContainerFluid}>
        <Container className={styles.advantagesContent}>
          <div>
            <h3 className={styles.advantagesTitle}>Auto Adaptive layouts</h3>
            <p className={styles.advantagesText}>Responsive{<br />}DNA.</p>
            <p className={styles.advantagesDescription}>
              Easily create truly responsive components while deploying
              production-ready code.
            </p>
            <div className={styles.iconWrapper}>
              <div className={styles.iconStylesWrapper}>
                <IconFirst />
              </div>
              <p className={styles.iconWrapperText}>Advanced pinning</p>
            </div>
            <div className={styles.iconWrapper}>
              <div className={styles.iconStylesWrapper}>
                <IconSecond />
              </div>
              <p className={styles.iconWrapperText}>
                Relative positioning with containers
              </p>
            </div>
            <div className={styles.iconWrapper}>
              <div className={styles.iconStylesWrapper}>
                <IconThird />
              </div>
              <p className={styles.iconWrapperText}>
                Percentage-based geometry
              </p>
            </div>
          </div>
          {width > 1200 && (
            <div className={styles.advantagesImageWrapper}>
              <Img
                fluid={data.advantagesPhone.childImageSharp.fluid}
                className={styles.advantagesPhone}
              />
            </div>
          )}
        </Container>
        {width < 1200 && (
          <div className={styles.advantagesImageWrapper}>
            <Img
              fluid={data.advantagesPhone.childImageSharp.fluid}
              className={styles.advantagesPhone}
            />
          </div>
        )}
      </Container>
    </div>
  )
}

export default AdvantagesSection
