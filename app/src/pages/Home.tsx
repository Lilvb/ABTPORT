import { ThemeProvider } from '@/context/ThemeContext'
import { useLenis } from '@/hooks/useLenis'
import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/sections/Navigation'
import HeroSection from '@/sections/HeroSection'
import AboutSection from '@/sections/AboutSection'
import ExperienceSection from '@/sections/ExperienceSection'
import ProjectsSection from '@/sections/ProjectsSection'
import EducationSkillsSection from '@/sections/EducationSkillsSection'
import ContactSection from '@/sections/ContactSection'
import Footer from '@/sections/Footer'

export default function Home() {
  useLenis()

  return (
    <ThemeProvider>
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
