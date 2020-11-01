import React, { ReactElement } from 'react'
import Reveal from 'react-awesome-reveal'
import { keyframes } from '@emotion/core'

import FC from '~/types/fc'

interface Props {
  children: ReactElement | ReactElement[]
  distance?: string
  delay?: number
}

const FadeUpWrapper: FC<Props> = ({ children, distance, delay = 300 }) => {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: ${
      distance ? `translate3d(0, ${distance}, 0)` : `translate3d(0, 100px, 0)`
    };
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
  return (
    <Reveal
      delay={delay}
      keyframes={customAnimation}
      triggerOnce
      fraction={0.1}
    >
      {children}
    </Reveal>
  )
}
export default FadeUpWrapper
