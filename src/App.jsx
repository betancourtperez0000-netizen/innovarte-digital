import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import FeatureCards from './components/FeatureCards'
import Benefits from './components/Benefits'
import Showcase from './components/Showcase'
import Activities from './components/Activities'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <div className="pointer-events-none fixed inset-0 bg-hero-gradient opacity-80" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_42%)] blur-3xl" />
      <div className="relative overflow-hidden">
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-8 lg:px-12">
          <motion.section initial="hidden" animate="visible" variants={fadeIn}>
            <Hero />
          </motion.section>
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} className="mt-24">
            <InfoSection />
          </motion.section>
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} className="mt-24">
            <FeatureCards />
          </motion.section>
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} className="mt-24">
            <Benefits />
          </motion.section>
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} className="mt-24">
            <Showcase />
          </motion.section>
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} className="mt-24">
            <Activities />
          </motion.section>
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} className="mt-24">
            <FAQ />
          </motion.section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
