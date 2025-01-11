import type { Project } from "../types";

export const db: Project[] = [
  {
    url: 'https://pacientes-zustand-react.netlify.app/',
    label: 'Pacientes - Zustand',
    githubUrl: 'https://github.com/Nico235711/pacientes-zustand',
    techs: [
      'React',
      'TypeScript',
      'Zustand',
      'Tailwind CSS',
      'Vite'
    ],
    image: 'project1.jpg',
    description: 'Desarrollé este proyecto para aprender y practicar el uso de Zustand, una biblioteca de gestión de estado en React. Implementé características como el manejo eficiente del estado global para pacientes, con un enfoque en simplicidad y rendimiento.'
  },
  {
    url: 'https://climaappzod.netlify.app/',
    label: 'Clima App - Zod',
    githubUrl: 'https://github.com/Nico235711/clima-app-zod',
    techs: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Zod'
    ],
    image: 'project2.jpg',
    description: 'Desarrollé esta aplicación para aprender y practicar el uso de Zod, una biblioteca de validación de datos. Implementé validaciones robustas para garantizar la integridad de los datos del clima consumidos desde una API, mejorando la fiabilidad y seguridad de la aplicación.'
  },
  {
    url: 'https://control-de-gastos-ts.netlify.app/',
    label: 'Control de Gastos - TS',
    githubUrl: 'https://github.com/Nico235711/control-gastos-contextapi',
    techs: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Context API',
      'Vite',
      'Zod'
    ],
    image: 'project3.jpg',
    description: 'Desarrollé este proyecto para aprender y practicar TypeScript junto con Context API en React. Implementé un sistema de gestión de gastos que utiliza Context API para manejar el estado global de manera eficiente, asegurando un código más tipado y mantenible.'
  },
]