import React from "react"
import Layout from "./layout"
import { Link } from "gatsby"

const ProjectLayout = ({ children }) => {
  return (
    <Layout>
      <Link to="/">&larr; Back to home page</Link>
      {children}
      <Link to="/">&larr; Back to home page</Link>
    </Layout>
  )
}

export default ProjectLayout
