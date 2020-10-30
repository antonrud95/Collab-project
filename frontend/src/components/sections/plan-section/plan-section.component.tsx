import React from 'react'
import { Container } from 'react-bootstrap'

import styles from './plan-section.module.scss'

const PlanSection = () => {
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
    </Container>
  )
}

export default PlanSection
