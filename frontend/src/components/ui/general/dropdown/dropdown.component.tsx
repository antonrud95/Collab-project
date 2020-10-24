import React from 'react'
import { Container } from 'react-bootstrap'

import FC from '~/types/fc'
import { DropdownType } from '~/types/dropdown.type'
import DropdownComponent from '~/components/ui/general/dropdown-item/dropdown-item.component'

import styles from './dropdown.module.scss'

interface Props {
  dropdowns: DropdownType[]
}

const Dropdown: FC<Props> = ({ dropdowns }) => {
  return (
    <Container className={styles.outerWrapper}>
      <div className={styles.dropdownMainTitle}>
        <p className={styles.mainTitleText}>Features</p>
        <p className={styles.mainTitleText}>Features</p>
        <p className={styles.mainTitleText}>Company</p>
      </div>
      <div className={styles.dropdownWrapper}>
        {dropdowns.map((drop: DropdownType, index) => {
          return (
            <DropdownComponent
              key={drop.id}
              componentWrapper={styles.dropdownItemWrapper}
              imageWrapper={styles.dropdownImageWrapper}
              contentWrapper={styles.dropdownContentWrapper}
              title={drop.title}
              text={drop.description}
              image={drop.image.childImageSharp.fluid}
              imageStyles={styles.dropdownImageStyles}
              dropdownTitleStyles={styles.dropdownTitleStyles}
              dropdownTextStyles={styles.dropdownTextStyles}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default Dropdown
