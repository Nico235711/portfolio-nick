
const links = [
  { url: '#about', label: 'Sobre Mi' },
  { url: '#projects', label: 'Proyectos' },
  { url: '#contact', label: 'Contacto' },
]

export const Navbar = () => {

  return (
    <nav className="flex gap-5">
      {links.map((link, index) => (
        <a
          href={link.url}
          key={index}
          className="hover:text-[#DBFF5E] transition-colors duration-300 text-lg"
        >{link.label}</a>
      ))}
    </nav>
  )
}
