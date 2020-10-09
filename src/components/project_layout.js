import React from "react"
import Layout from "./layout"
import { Link } from "gatsby"

const ProjectLayout = ({ children }) => {
  return (
    <Layout>
      <Link to="/" className="home"><i class="fa fa-2x fa-home"></i></Link>
      {children}
    </Layout>
  )
}

export default ProjectLayout
