
export const Footer = () => {

  const date = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 p-5">
      <div className="max-w-5xl mx-auto text-white">
        <p>Hecho con ❤️ por Nicolas Lopez Vidueiros | {date} - Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
