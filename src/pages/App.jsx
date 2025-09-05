import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'
import Sidebar from '../components/Sidebar'
import SkillsSection from '../components/SkillsSection'

function App() {
  return (
    <>
      <title>Jack Cain Dev</title>
      <div>
        <Header />
        <div className='page-layout'>
          <Sidebar />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
