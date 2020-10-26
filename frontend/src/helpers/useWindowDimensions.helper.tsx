import { useState, useEffect } from 'react'

export const useWindowDimensions = () => {
  const hasWindow = typeof window !== 'undefined'

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null
    return {
      width,
      height,
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    if (hasWindow) {
      const handleChange = () => {
        setWindowDimensions(getWindowDimensions())
      }
      window.addEventListener('resize', handleChange)
      window.addEventListener('orientationchange', handleChange)
      return () => {
        window.removeEventListener('resize', handleChange)
        window.removeEventListener('orientationchange', handleChange)
      }
    }
  }, [hasWindow])

  return windowDimensions
}
