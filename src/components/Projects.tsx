import { ProjectDetails } from "./ProjectDetails"

const projects = [
  { 
    url: 'https://control-de-gastos-ts.netlify.app/', 
    label: 'Control de Gastos', 
    githubUrl: 'https://github.com/Nico235711/control-gastos-contextapi',
    techs: [
      'React',
      'TypeScript',
      'Context API',
      'Tailwind CSS',
      'Vite'
    ]
  },
  { 
    url: '#', 
    label: 'Project 2', 
    githubUrl: '#',
    techs: [

    ]
  },
  { 
    url: '#', 
    label: 'Project 3', 
    githubUrl: '#',
    techs: [

    ]
  },
  { 
    url: '#', 
    label: 'Project 4', 
    githubUrl: '#',
    techs: [

    ]
  },
  { 
    url: '#', 
    label: 'Project 5', 
    githubUrl: '#',
    techs: [

    ]
  },
  { 
    url: '#', 
    label: 'Project 6', 
    githubUrl: '#' 
  },
]

export const Projects = () => {

  return (
    <div className="max-w-5xl mx-auto mt-5">
      <h2 className="text-5xl font-black text-center">Mis Proyectos</h2>
      {
        projects.map(project => (
          <ProjectDetails 
            url={project.url}
            label={project.label}
            githubUrl={project.githubUrl}
            techs={project.techs}
          />
        ))
      }
    </div>
  )
}
