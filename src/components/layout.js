import React from "react"
import "./layout.css"
import HeaderImg from "../images/top_left_border.png"

const Layout = ({ children }) => {
  return (
    <>
      <header><div className="header-image"></div></header>
      <main>{children}</main>
    </>
  )
}

export default Layout
