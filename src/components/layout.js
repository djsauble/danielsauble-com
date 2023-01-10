import { MDXProvider } from "@mdx-js/react"
import React from "react"
import SEO from "../components/seo"
import "./layout.css"

const shortcodes = { SEO }

const Layout = ({ children }) => {
  return (
    <MDXProvider components={shortcodes}>
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
      <main>
        <a href="https://github.com/djsauble/danielsauble-com" target="_blank" className="fork nav-item"><i class="fa fa-2x fa-github" aria-hidden="true"></i></a>
        {children}
      </main>
    </MDXProvider>
  )
}

export default Layout
