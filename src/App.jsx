import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'

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
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
