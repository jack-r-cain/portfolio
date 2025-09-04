import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'

function App() {
  return (
    <>
      <title>Jack Cain</title>
      <div>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
