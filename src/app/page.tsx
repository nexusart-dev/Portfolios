import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Certificate from '@/components/sections/Certificate'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Tools from '@/components/sections/Tools'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
      <Header />
      <Hero />
      <About />
      <Certificate />
      <Projects />
      <Skills />
      <Tools />
      <Contact />
      <Footer />
    </main>
  )
}