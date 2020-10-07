import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./project_hero.css"

const ProjectHero = ({to, title, description, children}) => {
  return (
    <Link to={to} className="project_hero">
      {children}
      <div>
        <p>
          <span>{title}</span>
          <br />
          <small>{description}</small>
          <br />
        </p>
      </div>
    </Link>
  )
}

ProjectHero.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default ProjectHero
