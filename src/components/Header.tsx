import { Github, LinkedIn } from "./Icons";
import { Navbar } from "./Navbar";

const links = [
  { 
    url: 'https://www.linkedin.com/in/nicolaslopezvidueiros/', 
    component: <LinkedIn />, 
    target: '_blank'
  },
  { 
    url: 'https://github.com/Nico235711', 
    component: <Github />,
    target: '_blank'
  },
]

export default function Header() {

  return (
    <header className="bg-slate-900 p-10">
      <div className="max-w-7xl mx-auto text-white flex flex-col lg:flex-row lg:justify-between items-center gap-5">
        <h1 className="font-black text-5xl text-center">
          <span className="text-[#DBFF5E]">Nicolás</span> Lopez Vidueiros
        </h1>
        <div className="flex gap-5">
          {
            links.map(link => (
              <a
                href={link.url}
                target={link.target}
                className="hover:text-[#DBFF5E] transition-colors duration-300"
              >{link.component}</a>
            ))
          }
        </div>
        <Navbar />
      </div>
    </header>
  )
}
