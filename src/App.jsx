import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Process from "./components/Process/Process";
import Faq from "./components/FAQ/Faq";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;