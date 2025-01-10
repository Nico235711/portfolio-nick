
export const AboutMe = () => {

  return (
    <div className="flex flex-col items-center justify-center mt-5 space-y-5">
      <img
        className="w-44 shadow rounded-full"
        src="/developer.jpg"
        alt="Nicolás Lopez Vidueiros" />
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="font-black text-5xl">Sobre Mí</h2>
        <p className="text-lg leading-7 w-96 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque
          voluptas voluptates, voluptate voluptatem quidem, quod quos, quia quas
          quibusdam quia quod quos, quia quas quibusdam quia quod quos, quia quas
          quibusdam quia quod quos, quia quas quibusdam quia quod quos, quia quas
        </p>
      </div>
    </div>
  )
}
