import React from "react"
import Layout from "./layout"
import { Link } from "gatsby"

const ChildLayout = ({ children }) => {
  return (
    <Layout>
      <Link to="/" className="home nav-item"><i class="fa fa-2x fa-arrow-left"></i></Link>
      {children}
    </Layout>
  )
}

export default ChildLayout
