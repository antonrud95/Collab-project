import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'

import Logo from '~/components/ui/general/logo/logo.component'

import FC from '~/types/fc'

import CloseIcon from '~/assets/icons/close-dark-icon.svg'
import SearchDarkIcon from '~/assets/icons/hero/search-dark.svg'

import styles from './mobile-menu.module.scss'

interface Props {
  isShown: boolean
  toggle: (value: boolean) => void
}

const MobileMenu: FC<Props> = ({ isShown, toggle }) => {
  const shownClass = [styles.root, styles.root__shown].join(' ')
  const closeClickHandler = () => {
    toggle(false)
  }
  return (
    <div className={isShown ? shownClass : styles.root}>
      <Container style={{ padding: 0 }}>
        <CloseIcon onClick={closeClickHandler} />
        <Logo />
        <SearchDarkIcon />
      </Container>
      <Container className={styles.linkBlock}>
        <Link to="/" className={styles.link}>
          Features
        </Link>
        <Link to="/" className={styles.link}>
          Pricing
        </Link>
        <Link to="/" className={styles.link}>
          Tours
        </Link>
        <Link to="/" className={styles.link}>
          Explore
        </Link>
      </Container>
    </div>
  )
}

export default MobileMenu
