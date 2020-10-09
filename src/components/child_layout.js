import React from "react"
import Layout from "./layout"
import { Link } from "gatsby"

const ChildLayout = ({ children }) => {
  return (
    <Layout>
      <Link to="/" className="home"><i class="fa fa-2x fa-home"></i></Link>
      {children}
    </Layout>
  )
}

export default ChildLayout
