import React from "react"
import PropTypes from "prop-types"
import "./project_hero.css"

const ProjectHero = ({to, title, description, children}) => {
  return (
    <div className="project_hero">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={to}>
        {children}
      </a>
    </div>
  )
}

ProjectHero.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default ProjectHero
