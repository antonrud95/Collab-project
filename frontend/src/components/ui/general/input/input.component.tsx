import React from 'react'
import FC from '~/types/fc'

interface Props {
  children?: any
  placeholder?: string
  inputStyles: string
  inputWrapper: string
  type: string
}

const SInput: FC<Props> = ({
  children,
  placeholder,
  inputStyles,
  inputWrapper,
  type,
}) => {
  return (
    <div className={inputWrapper}>
      {children}
      <input type={type} placeholder={placeholder} className={inputStyles} />
    </div>
  )
}

export default SInput
