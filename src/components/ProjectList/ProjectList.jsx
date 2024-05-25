import React from 'react'

export default function ProjectList(props) {

  const { projects } = props;

  console.log('ProjectList');

  console.log(props)
  return (
    <div className = "projects">
      {projects.map(project => {
        return (
          <>
            <img 
              className = "project"
              src = {project.img}
              alt = {project.category}
            />
          </>
        )
      })}
    </div>
  )
}
