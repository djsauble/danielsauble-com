import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./project_hero.css"

const ProjectHero = ({to, title, description, children}) => {
  return (
    <div className="project_hero">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={to}>
        {children}
      </Link>
    </div>
  )
}

ProjectHero.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default ProjectHero
