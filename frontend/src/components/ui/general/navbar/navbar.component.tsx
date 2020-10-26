import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import classnames from 'classnames'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useWindowDimensions } from '~/helpers/useWindowDimensions.helper'

import Dropdown from '~/components/ui/general/dropdown/dropdown.component'
import { graphql, useStaticQuery } from 'gatsby'

import Logo from '~/components/ui/general/logo/logo.component'
import MobileMenu from '~/components/ui/general/mobile-menu/mobile-menu.component'
import Button from '~/components/ui/general/button/button.component'

import DarkMenuOpenIcon from '~/assets/icons/burger-icon.svg'
import SearchIconDark from '~/assets/icons/hero/search-dark.svg'
import SearchIconLight from '~/assets/icons/hero/search-light.svg'

import styles from './navbar.module.scss'

const query = graphql`
  query {
    allStrapiDropdowns {
      nodes {
        id
        title
        description
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const SNavbar = () => {
  const data = useStaticQuery(query)
  const { width } = useWindowDimensions()
  const [isMenuShown, toggleMenu] = useState(false)
  const [isOnTop, setOnTop] = useState(true)
  const [isDropdownShow, toggleDropdown] = useState(false)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y >= -50) {
        setOnTop(true)
      } else {
        setOnTop(false)
      }
    },
    [isOnTop]
  )

  const openClickHandler = () => {
    toggleMenu(true)
  }

  const toggleDropdownHandler = () => {
    toggleDropdown(true)
    if (isDropdownShow === true) {
      toggleDropdown(false)
    }
  }

  return (
    <Navbar
      fixed="top"
      className={
        !isOnTop
          ? classnames(styles.navbar, styles.navbar__onLight)
          : styles.navbar
      }
    >
      <div className={styles.navbarContainer}>
        <DarkMenuOpenIcon
          className={styles.openIcon}
          onClick={openClickHandler}
        />
        <Logo />
        {width < 992 && <SearchIconDark />}

        <Nav className={classnames(styles.nav)}>
          <Link to="/" className={styles.navLink}>
            Features
          </Link>
          <Link to="/" className={styles.navLink}>
            Pricing
          </Link>
          <Link to="/" className={styles.navLink}>
            Tours
          </Link>
          <Link
            to="/"
            className={styles.navLink}
            onClick={toggleDropdownHandler}
          >
            Explore
          </Link>
        </Nav>
        {width > 991 && width < 1200 && (
          <SearchIconDark className={styles.searchBtn} />
        )}
        {width > 1199 && <SearchIconLight className={styles.searchBtn} />}
        <Nav className={styles.nav}>
          <Button variant="hero" className={styles.navbarBtn}>
            Get started
          </Button>
        </Nav>
        <Dropdown
          dropdowns={data.allStrapiDropdowns.nodes}
          isShown={isDropdownShow}
        />
      </div>
      <MobileMenu isShown={isMenuShown} toggle={toggleMenu} />
    </Navbar>
  )
}

export default SNavbar
