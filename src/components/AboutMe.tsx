
export const AboutMe = () => {

  return (
    <div className="bg-transparent border-4 border-gray-100 backdrop-blur-sm p-5 shadow rounded text-white">
      <img
        className="w-44 shadow rounded-full mx-auto border-2 border-gray-100"
        src="/developer.jpg"
        alt="Nicolás Lopez Vidueiros" />
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="font-black text-5xl">Sobre Mí</h2>
        <p className="text-xl leading-7 w-96 text-center">
          Me encanta mejorar mi lógica de programación y descubrir nuevas tecnologías para crear soluciones innovadoras. En mi tiempo libre, disfruto mirando anime, series y películas, que me inspiran con historias creativas y me ayudan a desconectar mientras exploro nuevas ideas. Siempre busco crecer tanto a nivel personal como profesional, enfrentando desafíos con entusiasmo y dedicación.
        </p>
      </div>
    </div>
  )
}
