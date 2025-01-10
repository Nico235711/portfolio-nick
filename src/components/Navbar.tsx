
const links = [
  { url: '#', label: 'Home' },
  { url: '#', label: 'About' },
  { url: '#', label: 'Projects' },
  { url: '#', label: 'Contact' },
]

export const Navbar = () => {

  return (
    <nav>
      {links.map((link) => (
        <a href={link.url}>{link.label}</a>
      ))}
    </nav>
  )
}
