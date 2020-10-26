import React from 'react'
import { Container } from 'react-bootstrap'

import styles from './features-section.module.scss'

const FeaturesSection = () => {
  return (
    <React.Fragment>
      <div className={styles.featuresContainer}>
        <Container>Some content</Container>
      </div>
      <div className={styles.ornamentContainer} />
    </React.Fragment>
  )
}

export default FeaturesSection
