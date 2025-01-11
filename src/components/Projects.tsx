import { useState } from "react"
import { ProjectDetails } from "./ProjectDetails"
import { db } from "../data/db"
import type { Project } from "../types"

export const Projects = () => {

  const [projects] = useState<Project[]>(db)

  return (
    <div className="max-w-5xl mx-auto mt-5">
      <h2 className="text-5xl font-black text-center">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 place-items-center">
        {
          projects.map(project => (
            <ProjectDetails key={project.label} {...project} />
          ))
        }
      </div>
    </div>
  )
}
