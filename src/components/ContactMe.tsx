
export const ContactMe = () => {

  return (
    <section>
      <h2 className="text-5xl font-black text-center">Contactame</h2>
      <form className="max-w-5xl mx-auto bg-white p-10 my-5 rounded-md" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Nombre"
            className="border-2 border-gray-300 p-3 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-gray-300 p-3 rounded-md"
          />
          <textarea
            placeholder="Mensaje"
            className="border-2 border-gray-300 p-3 rounded-md col-span-2"
          />
        </div>
        <button
          type="submit"
          className="bg-[#09f] px-5 py-3 rounded-md text-[#eee] font-bold mt-5 hover:bg-[#09f]/90 transition-colors duration-300"
        >Enviar</button>
      </form>
    </section>
  )
}
