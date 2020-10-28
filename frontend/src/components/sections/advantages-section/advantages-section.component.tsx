import React from 'react'
import { Container } from 'react-bootstrap'
import SButton from '~/components/ui/general/button/button.component'
import SInput from '~/components/ui/general/input/input.component'

import styles from './advantages-section.module.scss'

const AdvantagesSection = () => {
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
    </div>
  )
}

export default AdvantagesSection
