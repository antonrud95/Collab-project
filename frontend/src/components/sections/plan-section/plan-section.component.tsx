import React from 'react'
import { Container } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'

import PlanItem from '~/components/ui/plan-item/plan-item.component'
import styles from './plan-section.module.scss'

const PlanSection = () => {
  const data = useStaticQuery(graphql`
    query {
      box: file(relativePath: { eq: "images/plans/box.png" }) {
        childImageSharp {
          fluid(maxWidth: 24) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boxNoActive: file(
        relativePath: { eq: "images/plans/box-no-active.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 24) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container className={styles.planSectionWrapper}>
      <div className={styles.planSectionHeader}>
        <h3 className={styles.planSectionHeaderUpperTitle}>
          Join The Revolution
        </h3>
        <h2 className={styles.planSectionHeaderTitle}>
          Find the <span className={styles.titleTextColored}>Right Plan</span>
          <span className={styles.titleDotColored}>.</span>
        </h2>
        <p className={styles.planSectionHeaderText}>
          Flexible pricing options for freelancers
          <br />
          and design teams.
        </p>
      </div>
      <div className={styles.planCardsContainer}>
        <PlanItem
          itemWrapper={styles.planItemWrapper}
          itemHeaderTitleStyles={styles.headerTitleStyles}
          itemWrapperHeader={styles.planItemWrapperHeader}
          itemHeaderLogo={styles.planItemHeaderLogo}
          upperTitle={'Individual'}
          title={'Standard'}
          titleStyles={styles.planItemTitle}
          priceWrapper={styles.priceWrapper}
          price={'$19.99'}
          priceMonth={' /month'}
          priceColored={styles.priceColored}
          priceGrey={styles.priceGrey}
          descriptionWrapper={styles.priceDescWrapper}
          image={data.boxNoActive.childImageSharp.fluid}
          imageStyles={styles.boxStyles}
          descriptionStyles={styles.descriptionStyles}
          descriptionComponent={'1 user'}
          descriptionComponentSecond={'2 TB of secure storage'}
          descriptionComponentThird={
            'Premium productivity features and simple, secure file sharing'
          }
          imageBox={styles.imageBox}
          button={styles.buttonStyles}
        />
        <PlanItem
          itemWrapper={styles.planItemWrapper}
          itemHeaderTitleStyles={styles.headerTitleStyles}
          itemWrapperHeader={styles.planItemWrapperHeader}
          itemHeaderLogo={styles.planItemHeaderLogo}
          upperTitle={'Small Team'}
          title={'Professional'}
          titleStyles={styles.planItemTitle}
          priceWrapper={styles.priceWrapper}
          price={'$29.99'}
          priceMonth={' /month'}
          priceColored={styles.priceColored}
          priceGrey={styles.priceGrey}
          descriptionWrapper={styles.priceDescWrapper}
          image={data.boxNoActive.childImageSharp.fluid}
          imageStyles={styles.boxStyles}
          descriptionStyles={styles.descriptionStyles}
          descriptionComponent={'3+ user'}
          descriptionComponentSecond={'5 TB of secure storage'}
          descriptionComponentThird={
            'Premium productivity features and simple, secure file sharing'
          }
          imageBox={styles.imageBox}
          button={styles.buttonStyles}
        />
        <PlanItem
          itemWrapper={styles.planItemWrapper}
          itemHeaderTitleStyles={styles.headerTitleStyles}
          itemWrapperHeader={styles.planItemWrapperHeader}
          itemHeaderLogo={styles.planItemHeaderLogo}
          upperTitle={'Large Team'}
          title={'Ultimate'}
          titleStyles={styles.planItemTitle}
          priceWrapper={styles.priceWrapper}
          price={'$99.99'}
          priceMonth={' /month'}
          priceColored={styles.priceColored}
          priceGrey={styles.priceGrey}
          descriptionWrapper={styles.priceDescWrapper}
          image={data.boxNoActive.childImageSharp.fluid}
          imageStyles={styles.boxStyles}
          descriptionStyles={styles.descriptionStyles}
          descriptionComponent={'10+ user'}
          descriptionComponentSecond={'10 TB of secure storage'}
          descriptionComponentThird={
            'Premium productivity features and simple, secure file sharing'
          }
          imageBox={styles.imageBox}
          button={styles.buttonStyles}
        />
      </div>
    </Container>
  )
}

export default PlanSection
