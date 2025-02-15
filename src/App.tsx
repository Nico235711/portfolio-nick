import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Projects } from "./components/Projects";

export default function App() {

  return (
    <>
      <Header />
      <section className="bg-hero bg-cover" id="about">
        <div className="flex flex-col items-center justify-center p-5">
          <AboutMe />
        </div>
      </section>
      <main className="my-5" id="projects">
        <Projects />
      </main>
      <Footer />
    </>
  )
}
