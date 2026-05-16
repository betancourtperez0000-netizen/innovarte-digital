import { motion } from 'framer-motion'

export default function PremiumButton({ href, label }) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition duration-300"
    >
      {label}
    </motion.a>
  )
}
