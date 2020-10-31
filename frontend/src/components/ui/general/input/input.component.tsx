import React from 'react'
import FC from '~/types/fc'

interface Props {
  children?: any
  placeholder?: string
  inputStyles: string
  inputWrapper: string
  type: string
  change?: any
}

const SInput: FC<Props> = ({
  children,
  placeholder,
  inputStyles,
  inputWrapper,
  type,
  change,
}) => {
  return (
    <div className={inputWrapper}>
      {children}
      <input
        type={type}
        placeholder={placeholder}
        className={inputStyles}
        onChange={change}
      />
    </div>
  )
}

export default SInput
