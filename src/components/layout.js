import React from "react"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <svg className="header" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <defs>
            <clipPath id="test">
              <path d="M1000 0H0V200C0 58 288 5 1000 5V0Z"/>
            </clipPath>
          </defs>
          <rect x="0" y="0" fill="#333333" width="1000" height="200" clip-path="url(#test)" />
        </svg>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
