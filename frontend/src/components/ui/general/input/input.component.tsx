import React from 'react'
import styles from './input.module.scss'

import SendingMailLogo from '~/assets/icons/advantages/sending-mail.svg'

const SInput = () => {
  return (
    <div className={styles.inputWrapper}>
      <SendingMailLogo className={styles.inputLogoStyles} />
      <input placeholder="Email address" className={styles.inputStyles} />
    </div>
  )
}

export default SInput
