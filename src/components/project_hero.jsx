import React from "react"
import PropTypes from "prop-types"
import "./project_hero.css"

const ProjectHero = ({to, title, description, children}) => {
  return (
    <div className="project_hero">
      <h3><a href={to}>{title}</a></h3>
      <p>{description}</p>
      {/* The title link is the keyboard target, so the image link skips the tab order */}
      <a href={to} className="project_hero_image" tabIndex={-1} aria-hidden="true">
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
