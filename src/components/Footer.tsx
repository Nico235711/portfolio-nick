
export const Footer = () => {

  const date = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 p-10">
      <div className="max-w-7xl mx-auto text-white">
        <p className="text-lg">Hecho con ❤️ por Nicolas Lopez Vidueiros | {date} - Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
