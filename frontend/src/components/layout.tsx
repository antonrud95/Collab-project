import React from 'react'
import Navbar from '~/components/ui/general/navbar/navbar.component'
import '~/styles/index.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>

      {/* <main className="main-wrapper-container">{children}</main>
      <div className="ornament-container"></div> */}
    </>
  )
}

export default Layout
