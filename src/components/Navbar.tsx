
const links = [
  { url: '#', label: 'Home' },
  { url: '#', label: 'About' },
  { url: '#projects', label: 'Projects' },
  { url: '#', label: 'Contact' },
]

export const Navbar = () => {

  return (
    <nav className="flex gap-5">
      {links.map((link) => (
        <a
          href={link.url}
          className="hover:text-[#DBFF5E] transition-colors duration-300 text-lg"
        >{link.label}</a>
      ))}
    </nav>
  )
}
