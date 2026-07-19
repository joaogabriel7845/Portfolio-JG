import Hero from "./components/Hero"
import Header from "./components/Header"
import Projects from "./components/Projects"
import AnimatedSection from "./components/AnimatedSection"
import Stack from "./components/Stack"
import ContactMe from "./components/ContactMe"
import ShortPhrase from "./components/ShortPhrase"


function App() {
  return (
    <div className="w-full h-screen">

      <Header />
      
      <Hero />

      <AnimatedSection>
        <ShortPhrase />
      </AnimatedSection>

      <AnimatedSection>
        <Projects />
      </AnimatedSection>

      <AnimatedSection>
        <Stack />
      </AnimatedSection>
      
      <AnimatedSection>
        <ContactMe />
      </AnimatedSection>

    </div>
  )
}

export default App